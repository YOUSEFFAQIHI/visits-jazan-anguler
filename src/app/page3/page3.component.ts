import { Component } from '@angular/core';

@Component({
  selector: 'app-page3',
  standalone: false,
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {

   cards = [
    {
      title: ' متحف آثار جازان',
      text: 'يعتبر متحف آثار جازان واحدًا من أهم المتاحف الأثرية في السعودية مما يعزز من مقومات السياحة في جازان، ويضم مجموعة كبيرة من الآثار التي تعود إلى فترات مختلفة من التاريخ',
      href: '#',
      images: [
        { src: 'page3/jazmu1.jpg', alt: 'Nature 1' },
        { src: 'page3/images.jpeg', alt: 'Nature 2' },
        { src: 'page3/download.jpeg', alt: 'Nature 3' },
      ],
    },
    {
      title: ' القرية التراثية',
      text: 'تعد القرية التراثية واحدة من أهم أماكن السياحة في جازان، حيث تعكس ثقافة وتراث المنطقة، وتجذب إليها الكثير من السياح. تتميز القرية بالمنازل التقليدية والأسواق التراثية والحرف اليدوية المحلية والمأكولات التقليدية، بالإضافة إلى المزارات التي بها قطع أثرية نادرة.',
      href: '#',
      images: [
        { src: 'page3/FJ1fVAsXEAMJoXx.jpeg', alt: 'Entertainment 1' },
        { src: 'page3/FJ1fVA3XwAEIffG.jpeg', alt: 'Entertainment 2' },
        { src: 'page3/FnPu09TWIAEmrSI.jpeg', alt: 'Entertainment 3' },
      ],
    },
    {
      title: 'قلعة الدوسرية',
      text: 'تعد قلعة الدوسرية واحدة من معالم السياحة في جازان التاريخية الهامة، حيث يعود تاريخها إلى القرن الدولة العثمانية. تتميز القلعة بتصميمها الأثري الجميل، ووقوعها أعلى جبل يقع في وسط المدينة، ويمكن للزوار الاستمتاع بجولة داخل القلعة والتعرف على تاريخ القلعة"',
      href: '#',
      images: [
        { src: 'page3/GbtJT_hWMB8FgEW.jpeg', alt: 'Heritage 1' },
        { src: 'page3/F3A_LUIaQAEaopg.jpeg', alt: 'Heritage 2' },
        { src: 'page3/FxE8642WwA8Bps1.jpeg', alt: 'Heritage 3' },
      ],
    },
   
  ];
}
