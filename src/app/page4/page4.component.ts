import { Component } from '@angular/core';

@Component({
  selector: 'app-page4',
  standalone: false,
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.css'
})
export class Page4Component {
import { Component } from '@angular/core';

@Component({
  selector: 'app-page4',
  standalone: false,
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.css'
})
export class Page4Component {

 cards = [
    {
      title: ' بوليفارد جازان - boulevard jazan',
      text: 'نافذ على البحر الأحمر في مدينة جازان، ويعتبر من أكبر المجمعات التجارية والترفيهية في المنطقة، حيث يضم مجموعة متنوعة من المتاجر والمطاعم والمقاهي، بالإضافة إلى مناطق ترفيهية للأطفال والكبار.',
      href: '#',
      images: [
        { src: 'page4/5893256405484424203_121.jpg', alt: 'Nature 1' },
        { src: 'page4/5893256405484424201_121.jpg', alt: 'Nature 2' },
        { src: 'page4/5893256405484424202_121.jpg', alt: 'Nature 3' },
      ],
    },
    {
      title: '  سكاي مول - sky mall',
      text: ' يعد من أكبر المولات التجارية في جازان، ويقع في موقع متميز على طريق الملك فهد. يضم المول مجموعة واسعة من المتاجر العالمية والمحلية، بالإضافة إلى منطقة ترفيهية كبيرة تضم سينما وألعاب للأطفال.',
      href: '#',
      images: [
        { src: 'page4/5893256405484424204_121.jpg', alt: 'Entertainment 1' },
        { src: 'page4/5893256405484424205_121.jpg', alt: 'Entertainment 2' },
        { src: 'page4/5893256405484424206_121.jpg', alt: 'Entertainment 3' },
      ],
    },
    {
      title: 'الواجهة البحرية | Water Front ',
      text: 'ةتعتبر الواجهة البحرية في جازان من أجمل الأماكن الترفيهية في المنطقة، حيث توفر إطلالات خلابة على البحر الأحمر ومساحات واسعة للمشي والاسترخاء. تضم الواجهة العديد من المطاعم والمقاهي التي تقدم مأكولات بحرية طازجة، بالإضافة إلى مناطق مخصصة للأطفال.',
      href: '#',
      images: [
        { src: 'page4/5893256405484424208_121.jpg', alt: 'Heritage 1' },
        { src: 'page4/5893256405484424209_121.jpg', alt: 'Heritage 2' },
        { src: 'page4/5893256405484424210_121.jpg', alt: 'Heritage 3' },
      ],
    },
   
  ];
  
}

}
