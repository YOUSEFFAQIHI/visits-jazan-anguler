import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  standalone: false,
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
 cards = [
    {
      title: 'قرية الخشل',
      text: 'تتميز بجمالها الساحر وفي الاشهر الممطرة مما جعلها وجهه لاغلب سكان المنطقة',
      href: '#',
      images: [
        { src: '5891004605670738625_121.jpg', alt: 'Nature 1' },
        { src: '5891004605670738626_121.jpg', alt: 'Nature 2' },
        { src: '5891004605670738624_121.jpg', alt: 'Nature 3' },
      ],
    },
    {
      title: 'مطل العارضة',
      text: 'منتزه يقع في محافظة العارضة بمنطقة جازان، ويعتبر أحد أبرز الوجهات السياحية في المنطقة، حيث يطل على مناظر طبيعية خلابة ووادي العارضة',
      href: '#',
      images: [
        { src: 'download (1).jpeg', alt: 'Entertainment 1' },
        { src: 'download.jpeg', alt: 'Entertainment 2' },
        { src: 'sabq_2024-09-06_8bu21jzm_NutE0YaS58d5z9ttXgbGgQ6G6ej5vyIQDehuJpx6.avif', alt: 'Entertainment 3' },
      ],
    },
    {
      title: 'فيفا',
      text: 'تعرف بسلسلة جبالها الشاهقة التي تقع ضمن نطاق مرتفعات جبال السروات، وتتميز بجمالها الطبيعي ومناظرها الخلابة التي تشبه "جارة القمر"',
      href: '#',
      images: [
        { src: 'jOQ5LFDZ00BsUyfdtCRp7CpXYAyGdgXpPp3rqHoN.jpg', alt: 'Heritage 1' },
        { src: '4a31gWEc90QCw8s4nGB7qv04zS5R6J42tzVBXGKj.jpg', alt: 'Heritage 2' },
        { src: 'images.jpeg', alt: 'Heritage 3' },
      ],
    },
    {
      title: 'الجبل الاسود',
      text: 'وجهة سياحية بارزة في محافظة الريث بمنطقة جازان، يتميز بغطاء نباتي كثيف يضفي عليه اللون الداكن، ودرجات حرارة باردة مع ضباب وأمطار مستمرة،',
      href: '#',
      images: [
        { src: 'GX2WsAaXcAETtZC.jpeg', alt: 'Shopping 1' },
        { src: 'GexI-PzWEAAPpbQ.jpeg', alt: 'Shopping 2' },
        { src: 'download (2).jpeg', alt: 'Shopping 3' },
      ],
    },
    {
      title: 'وادي لجب',
      text: 'ويتميز بأخاديده العميقة، وشلالاته المتدفقة، وحدائقه المعلقة المتمثلة في الأشجار المعمرة التي تنمو على جانبي الوادي وترتفع جذورها من الحواف لتصل إلى مجرى المياه.',
      href: '#',
      images: [
        { src: 'FEVQffNXMAIHtuZ.jpeg', alt: 'Events 1' },
        { src: 'FEVQffOXwAcMWKR.jpeg', alt: 'Events 2' },
        { src: 'Gte0--pXsAAsSRF.jpeg', alt: 'Events 3' },
      ],
    },
    {
      title: 'جزيرة فرسان',
      text: '  تعتبر أكبر جزيرة في أرخبيل فرسان، وتتميز بشواطئها الرملية البيضاء ومياهها الفيروزية الصافية، وتعد موطنًا لمجموعة متنوعة من الحياة البحرية والطيور النادرة.',
      href: '#',
      images: [
        { src: 'GfZfjSvWYAErAry.jpeg', alt: 'Food 1' },
        { src: 'GfZfjStXwAA0unp.jpeg', alt: 'Food 2' },
        { src: 'GfZfjSvXQAEbhAc.jpeg', alt: 'Food 3' },
      ],
    },
  ];
}
