// File: KomikService.js
// Fungsi yang diekstrak dari gambar sebelumnya (0d2390.jpg) dan gambar 0d2339.jpg

// CREATE
async function createKomik(database, komikData) {
    const { title, description, author, imageType, imageName, imageData } = komikData;

    if (!title || !description || !author) {
        throw new Error('Title, description, dan author wajib diisi');
    }

    const newKomik = await database.Komik.create({
        title,
        description,
        author,
        imageType: imageType || null,
        imageName: imageName || null,
        imageData: imageData || null,
    });

    return newKomik;
}

// READ ALL
async function getAllKomik(database) {
    const komiks = await database.Komik.findAll();

    return komiks.map(k => {
        if (k.imageData) {
            // Konversi Buffer binary image menjadi string Base64 untuk ditampilkan
            k.imageData = k.imageData.toString('base64'); 
        }
        return k;
    });
}

// READ BY ID
async function getKomikById(database, id) {
    const komik = await database.Komik.findByPk(id);

    if (!komik) throw new Error('Komik tidak ditemukan');

    if (komik.imageData) {
        komik.imageData = komik.imageData.toString('base64');
    }

    return komik;
}

// UPDATE
async function updateKomik(database, id, komikData) {
    const komik = await database.Komik.findByPk(id);
    
    if (!komik) {
        throw new Error(`Komik dengan ID ${id} tidak ditemukan`);
    }
    
    // Melakukan update pada instance komik yang sudah ada
    await komik.update(komikData);
    
    return komik;
}

// DELETE
async function deleteKomik(database, id) {
    const komik = await database.Komik.findByPk(id);
    
    if (!komik) {
        throw new Error(`Komik dengan ID ${id} tidak ditemukan`);
    }
    
    await komik.destroy();
    
    return { message: `Komik dengan ID ${id} berhasil dihapus` };
}

module.exports = {
    createKomik,
    getAllKomik,
    getKomikById,
    updateKomik,
    deleteKomik,
    
};