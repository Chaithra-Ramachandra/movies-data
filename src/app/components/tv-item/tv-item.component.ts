import { Component, OnInit, Input } from '@angular/core';
import { TvShow } from 'src/app/models/tv';
import { IMAGE_SIZES } from '../../constants/images-sizes';
import { Item } from '../item/item';

@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss'],
})
export class TvItemComponent implements OnInit {
  @Input() itemData: Item | null = null;
  // @Input() tvShow: TvShow | null = null;

  imagesSizes = IMAGE_SIZES;
  constructor() {}

  ngOnInit(): void {}
}
