import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Album} from "../models";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album : Album;
  newTitle: string;
  loaded: boolean;
  constructor(private route : ActivatedRoute,
              private albumService : AlbumsService) {
    this.album = {} as Album;
    this.loaded = true;
    this.newTitle = '0';
  }

  ngOnInit(){

    this.route.paramMap.subscribe((params : ParamMap) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      // this.album = ALBUMS.find((album : Album) => album.id === id) as Album;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
    }
  save(album : Album){
    this.loaded = false;
    this.albumService.changeTitle(this.newTitle, album).subscribe((album) => {
      this.album.title = this.newTitle;
      this.loaded = true;
    })
  }
}
