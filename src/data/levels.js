export const levels = [
  {
    id: 'level-1',
    name: 'Mencuci Tangan',
    description: 'Susun langkah-langkah mencuci tangan yang benar.',
    iconSvg: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    steps: [
      { id: 'step-1-1', text: 'Basahi tangan dengan air', order: 1 },
      { id: 'step-1-2', text: 'Oleskan sabun ke telapak', order: 2 },
      { id: 'step-1-3', text: 'Gosok telapak dan sela jari', order: 3 },
      { id: 'step-1-4', text: 'Bilas dengan air mengalir', order: 4 },
      { id: 'step-1-5', text: 'Keringkan dengan handuk', order: 5 }
    ]
  },
  {
    id: 'level-2',
    name: 'Menyikat Gigi',
    description: 'Susun langkah-langkah menyikat gigi yang benar.',
    iconSvg: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6z"/><path d="M10 13v8"/></svg>`,
    steps: [
      { id: 'step-2-1', text: 'Ambil sikat gigi dan pasta', order: 1 },
      { id: 'step-2-2', text: 'Oleskan pasta ke bulu sikat', order: 2 },
      { id: 'step-2-3', text: 'Sikat semua permukaan gigi', order: 3 },
      { id: 'step-2-4', text: 'Berkumur dengan air', order: 4 },
      { id: 'step-2-5', text: 'Bersihkan sikat gigi', order: 5 }
    ]
  },
  {
    id: 'level-3',
    name: 'Membuat Teh Manis',
    description: 'Susun langkah-langkah membuat teh manis.',
    iconSvg: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><path d="M6 2h2"/><path d="M12 2h2"/></svg>`,
    steps: [
      { id: 'step-3-1', text: 'Siapkan air panas dalam cangkir', order: 1 },
      { id: 'step-3-2', text: 'Masukkan teh celup ke cangkir', order: 2 },
      { id: 'step-3-3', text: 'Tunggu teh keluar', order: 3 },
      { id: 'step-3-4', text: 'Tambahkan gula sesuai selera', order: 4 },
      { id: 'step-3-5', text: 'Aduk sampai gula larut', order: 5 }
    ]
  },
  {
    id: 'level-4',
    name: 'Berangkat Sekolah',
    description: 'Susun langkah-langkah mempersiapkan berangkat ke sekolah.',
    iconSvg: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M8 14h8M12 11v6"/></svg>`,
    steps: [
      { id: 'step-4-1', text: 'Bangun dari tidur', order: 1 },
      { id: 'step-4-2', text: 'Mandi dan pakai seragam', order: 2 },
      { id: 'step-4-3', text: 'Sarapan pagi', order: 3 },
      { id: 'step-4-4', text: 'Bawa tas berisi buku dan alat', order: 4 },
      { id: 'step-4-5', text: 'Berangkat ke sekolah', order: 5 }
    ]
  },
  {
    id: 'level-5',
    name: 'Menanam Biji',
    description: 'Susun langkah-langkah menanam biji dengan benar.',
    iconSvg: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-7"/><path d="M12 15C12 9 6 7 2 6c4 0 8 2 10 9z"/><path d="M12 15c0-6 6-8 10-9-4 0-8 2-10 9z"/><path d="M12 22h4"/></svg>`,
    steps: [
      { id: 'step-5-1', text: 'Siapkan pot dan tanah gembur', order: 1 },
      { id: 'step-5-2', text: 'Taruh biji di tengah pot', order: 2 },
      { id: 'step-5-3', text: 'Tutup biji dengan tanah', order: 3 },
      { id: 'step-5-4', text: 'Siram dengan air secukupnya', order: 4 },
      { id: 'step-5-5', text: 'Taruh pot di tempat terang', order: 5 }
    ]
  },
  {
    id: 'level-6',
    name: 'Menyeberang Jalan',
    description: 'Susun langkah-langkah menyeberang jalan dengan aman.',
    iconSvg: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="7" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="17" r="2"/></svg>`,
    steps: [
      { id: 'level-6-1', text: 'Berhenti di tepi jalan', order: 1 },
      { id: 'level-6-2', text: 'Lihat ke arah kanan dan kiri', order: 2 },
      { id: 'level-6-3', text: 'Tunggu sampai aman', order: 3 },
      { id: 'level-6-4', text: 'Berjalan lurus ke seberang', order: 4 },
      { id: 'level-6-5', text: 'Tiba di seberang dengan selamat', order: 5 }
    ]
  }
];