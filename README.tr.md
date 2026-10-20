# 🚀 Shopify Liquid Artık Kod Temizleyici & Tema Hız Denetçisi

[🇬🇧 English](README.md) · [🇹🇷 Türkçe](README.tr.md)

> Kaldırılan Shopify uygulamalarının tema dosyalarında bıraktığı artık Liquid kodlarını, yetim script etiketlerini ve CSS parçalarını tespit edip temizleyen otomatik denetim aracı.

Geliştirici ve Bakım Sorumlusu: **[Harun Sekmen](https://github.com/harunsekmen)** — E-Ticaret Sistem Mühendisi & WooCommerce Uzmanı.

[✉️ İletişime Geç](mailto:sekmenwp@gmail.com) · [💼 Upwork Profili](https://www.upwork.com/freelancers/~01a7a8b58043e6e6d9) · [🔗 GitHub Ana Profil](https://github.com/harunsekmen)

---

## ⚡ Çözdüğü Kritik Sorun

Shopify mağazalarında zaman içinde onlarca uygulama yüklenip silinir. Uygulama panelden silinse bile:
- **Yetim Liquid Kodları:** Tema şablonlarında kalan boş etiketler ve kırık render çağrıları sunucu yanıt süresini artırır.
- **Kayıp Dış Script İstekleri:** Artık var olmayan sunuculara yapılan DNS ve JS istekleri sayfa yüklemesini saniyelerce bekletir.
- **Düşen Sayfa Hızı:** 404 veren harici varlıklar Core Web Vitals skorlarını ve Google reklam kalite puanını düşürür.

Bu araç, tema kod tabanını baştan sona tarayarak kaldırılmış uygulamaların bıraktığı tüm çöpleri güvenle raporlar ve temizler.

---

## 🛠️ Öne Çıkan Özellikler

- **Otomatik Desen Tespiti:** 100'den fazla popüler Shopify uygulamasının bıraktığı artık Liquid ve snippet desenlerini tanır.
- **Risk Analizi ve Raporlama:** Temizlenecek satırları güvenli ve onaylanabilir bir rapor olarak sunar.
- **Yedeklemeli Güvenli Temizlik:** Değişiklik yapmadan önce tema yedeği oluşturarak sıfır kesinti garantisi verir.
- **PageSpeed Hız Artışı:** Gereksiz ağ isteklerini ortadan kaldırarak mağaza açılışını hızlandırır.

---

## 🏗️ Teknik Mimari ve Standartlar

`Node.js / JavaScript` • `Shopify Theme API` • `RegEx Pattern Matching` • `AST Parser`

---

## 🚀 Kurulum ve Test

1. Klonlayın ve test edin:
   ```bash
   git clone https://github.com/harunsekmen/shopify-liquid-leftover-app-cleaner.git
   cd shopify-liquid-leftover-app-cleaner && node tests/test-cleaner.js
   ```

---

## 📄 Lisans

Bu proje **GPL-3.0 Lisansı** ile açık kaynak olarak sunulmaktadır.
