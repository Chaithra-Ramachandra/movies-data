import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGE_SIZES } from '../../constants/images-sizes';
import { Item } from './item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item | null = null;
  // @Input() itemData: Movie | null = null;

  imagesSizes = IMAGE_SIZES;
  constructor() {}

  ngOnInit(): void {}
}
