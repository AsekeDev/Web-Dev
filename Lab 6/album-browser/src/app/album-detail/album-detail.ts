import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetailComponent implements OnInit {
  isLoading: boolean = true;
  errorMsg: string = '';
  album: Album | null = null;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!idParam || Number.isNaN(id)) {
      this.errorMsg = 'Invalid album id in URL.';
      this.isLoading = false;
      return;
    }

    this.albumService.getAlbum(id)
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe({
        next: (data) => {
          this.album = data;
          this.editedTitle = data.title;
        },
        error: (err) => {
          this.errorMsg = 'Failed to load album.';
          console.error('Album load error:', err);
        }
      });
  }

  save(): void {
    if (!this.album) return;

    const updated: Album = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updated).subscribe({
      next: (data: Album) => {
        this.album = data; // обновляем UI локально
        alert('Saved (simulated).');
      },
      error: () => alert('Save failed')
    });
  }

  viewPhotos(): void {
    if (!this.album) return;
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}
