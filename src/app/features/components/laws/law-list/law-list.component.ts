import { Component, OnInit } from '@angular/core';

interface Act {
  id?: number;
  title: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-law-list',
  templateUrl: './law-list.component.html',
  styleUrls: ['./law-list.component.css'],
})
export class LawListComponent implements OnInit {
  actList: Act[] = [
    {
      id: 1,
      title: 'সংক্ষিপ্ত শিরোনামা ও প্রবর্তন',
      date: '৩০ জুন, ১৯৯৮',
      description: `
        <ol>
          <li>এই আইন অর্থ আইন, ১৯৯৮ নামে অভিহিত হইবে৷</li>
          <li>The Provisional Collection of Taxes Act, 1931 (XVI of 1931) এবং উহার অধীনে জারীকৃত ঘোষণা সাপেক্ষে, এই আইন ১৯৯৮ সনের ১লা জুলাই তারিখে কার্যকর হইবে৷</li>
        </ol>
      `,
    },
    {
      id: 2,
      title: 'Act II of 1899 এর সংশোধন',
      date: '৩০ জুন, ১৯৯৮',
      description: `
        <ol>
          <li>The Stamp Act, 1899 (II of 1899)-এর “SCHEDULE-I” এর পরিবর্তে এই আইনের প্রথম তফসিলে বর্ণিত তফসিল প্রতিস্থাপিত হইবে৷</li>
        </ol>
      `,
    },
    {
      id: 3,
      title: '১৯৯১ সনের ২২ নং আইন সংশোধন',
      date: '৩০ জুন, ১৯৯৮',
      description: `
        <ol>
          <li>ধারা ১ এর উপান্ত টীকার, “প্রয়োগ” কমা ও শব্দ বিলুপ্ত হইবে</li>
          <li>ধারা ২ এর-
            (ক) দফা (গ) এর উপ-দফা (অ) এর “মোড়ক সামগ্রী” শব্দগুলির পরিবর্তে “যে কোন গ্যাস, জ্বালানী হিসাবে ব্যবহৃত যে কোন পদার্থ, মোড়ক সামগ্রী” শব্দগুলি ও কমাগুলি প্রতিস্থাপিত হইবে;
            (খ) দফা (ণ) এর “বিশ” শব্দটির পরিবর্তে “দশ” শব্দটি প্রতিস্থাপিত হইবে;
            (গ) দফা (থথ) এর পরিবর্তে নিম্নরূপ দফা (থথ) প্রতিস্থাপিত হইবে, যথা:-
            “(থথ) “ব্যবসায়ী” বলিতে এমন ব্যক্তিকে বুঝাইবে যিনি তত্কর্তৃক আমদানীকৃত, ক্রয়কৃত, অর্জিত বা অন্য কোনভাবে সংগৃহীত পণ্যের কোনরূপ আকৃতি, প্রকৃতি, বৈশিষ্ট্য বা গুণগত পরিবর্তন না করিয়া পণ্যের বিনিময়ে সাধারণ ভোক্তাদের নিকট বিক্রয় বা অন্যবিধভাবে হস্তান্তর করেন;”</li>
          <li>ধারা ৩ এর-
            উপ-ধারা (১)  এ “দ্বিতীয় তফসিলে উল্লিখিত” শব্দগুলির পর “বাংলাদেশ প্রদত্ত” শব্দগুলি সন্নিবেশিত হইবে;</li>
          <li>ধারা ৫ এর উপ-ধারা (২ক) এর পরিবর্তে নিম্নরূপ উপ-ধারা (২ক) প্রতিস্থাপিত হইবে, যথা:-
            “(২ক)৷ কোন নিবন্ধিত ব্যক্তি যদি কন্ট্রাক্ট বা সাব-কন্ট্রাক্টের মাধ্যমে অন্য কোন ব্যক্তির উত্পাদিত পণ্য সংগ্রহপূর্বক তাহার নিজস্ব ব্রান্ড নামে সরাসরি বা নিজস্ব বিক্রয় কেন্দ্র বা ডিস্ট্রিবিউটর বা কমিশন এজেন্টের মাধ্যমে বিক্রয় করেন, তাহা হইলে ব্রান্ড নামযুক্ত পণ্যটির ক্ষেত্রে উহার স্বত্বাধিকারী কর্তৃক ক্রেতার নিকট হইতে প্রাপ্য পণের ভিত্তিতে মূল্য সংযোজন কর নিরূপণ করা হইবে এবং উক্ত পণ উপ-ধারা (২) তে বর্ণিত “প্রাপ্য পণ” এর সমপরিমাণ হইবে৷”</li>
        </ol>
      `,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
