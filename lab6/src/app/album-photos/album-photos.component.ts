import {Component, OnInit} from '@angular/core';
import {Photo} from "../models";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[];
  loaded: boolean;

  constructor(private route : ActivatedRoute,
              private albumService : AlbumsService,
              private router: Router) {
    this.photos = {} as Photo[];
    this.loaded = true;
  }

  ngOnInit(){
    this.loaded = false;
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.albumService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }
  back(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.router.navigate(['/albums/'+id]);
    });
  }
}
