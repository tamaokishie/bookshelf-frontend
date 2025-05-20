
const basePath = process.env.PUBLIC_URL;

const books = [
  {
    id: 1,
    title: 'Web APIの設計',
    image: `${basePath}/images/image_webapi.jpg`,
    totalPages: 300,
    readPages: 150,
  },
  {
    id: 2,
    title: 'ドメイン駆動設計入門',
    image: `${basePath}/images/image_domainstart.jpg`,
    totalPages: 250,
    readPages: 100,
  },
  {
    id: 3,
    title: '「入門」ドメイン駆動設計',
    image: `${basePath}/images/image_domain2.jpg`,
    totalPages: 250,
    readPages: 100,
  },
  {
    id: 4,
    title: 'モデルベース要件定義テクニック',
    image: `${basePath}/images/image_sdem.jpg`,
    totalPages: 250,
    readPages: 100,
  },
  {
    id: 5,
    title: 'プログラマー脳',
    image: `${basePath}/images/image_programer_brain.jpg`,
    totalPages: 250,
    readPages: 100,
  },
  {
    id: 6,
    title: 'なぜオブジェクト指向で作るのか',
    image: `${basePath}/images/image_object.jpg`,
    totalPages: 250,
    readPages: 100,
  },
];

export default books;
