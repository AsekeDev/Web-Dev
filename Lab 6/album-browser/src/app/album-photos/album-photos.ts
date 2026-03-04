import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AlbumService } from '../services/album';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number = 0;
  isLoading: boolean = true;
  errorMsg: string = '';
  photos: Photo[] = [];

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

    this.albumId = id;

    this.albumService.getAlbumPhotos(this.albumId)
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe({
        next: (data: Photo[]) => {
          this.photos = data;
        },
        error: (err: unknown) => {
          this.errorMsg = 'Failed to load photos.';
          console.error('Photos load error:', err);
        }
      });
  }

  back(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
