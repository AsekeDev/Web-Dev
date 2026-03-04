import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {
  isLoading: boolean = true;
  errorMsg: string = '';
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe({
        next: (data: Album[]) => {
          this.albums = data;
        },
        error: (err: unknown) => {
          this.errorMsg = 'Failed to load albums.';
          console.error('Albums load error:', err);
        }
      });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((a: Album) => a.id !== id);
      },
      error: (err: unknown) => {
        console.error('Delete error:', err);
        alert('Delete failed');
      }
    });
  }
}
