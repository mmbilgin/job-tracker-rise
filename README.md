# Job Tracker

Bu uygulama Rise Technology firmasının verdiği proje dolayısıyla hazırlanmıştır.

Demo gösterimi: https://job-tracker-rise.herokuapp.com/

### Uygulamanın konsepti kişisel bir iş takibi uygulaması.
### Özellikleri:
- İş adı girilerek ve önceliği seçilerek yeni bir iş kaydı oluşturulabilir.
- Girilen işlerin önceliği düzenlenebilir ya da iş silinebilir.
- Listede varsayılan olarak aciliyete göre sıralama yapılmaktadır ancak tablo üzerinden isme göre ve aciliyete göre tersten de sıralanabilir.
- Arama bölümünde harf ya da kelime yazılarak filtreleme yapılabilir.
- Önceliğe göre filtreleme bölümünden istenilen öncelik seçilerek filtreleme yapılabilir.

Uygulamaya ek olarak /api klasörü altında "priorities" adında bir json dosyası tanımlanmıştır.
Bu dosyada hazırlanan formatta yeni öncelikler eklenebilir ya da silinebilir.
Uygulama varsayılan olarak 3 önceliğe sahiptir (Acil, Önemli, Normal). 
Ancak /api klasörü altındaki json dosyası düzenlenip yanında bulunan index.js dosyası node üzerinde çalıştırıldığı taktirde uygulama bu api yi dinleyecek ve öncelik listesini güncelleyecektir. (Varsayılan değer App.js dosyası içindeki "pageUrl" verisinde localhost olarak tanımlanmıştır. Başka bir host üzerinde çalıştırıldığı taktirde bu değer düzeltilmelidir.)

## NOT:
Uygulamayı hazırlama sürecinde evimizde aktif kullandığımız bilgisayarda geliştirme yaptım. Bu bilgisayarı aynı zamanda eşim de kullandığı için commit'lerde sanki 2 kişi commit girmiş gibi gözükmekte. Ancak ben bunu farkettiğim andaki committe düzeltme yapıp orada da belirtmiştim. Tüm değişiklikler tarafımdan yapılmış olup, commit'lerin doğal yapısını (zaman damgaları ve içerikleri) sürecin tam olarak görülmesi açısından bozmamayı tercih ettim. Yeni bir proje oluşturup tek bir committe giriş yapmak ya da geçmişe dönük commit'ler girerek bu doğallığı bozmak istemedim. 

Lütfen bu notu dikkate alarak değerlendirme yapınız.