// Masonry gallery data with size classes
const masonryData = [
    { size: 'large', title: 'Galeri 1', category: 'kenangan' },
    { size: 'small', title: 'Galeri 2', category: 'kenangan' },
    { size: 'small', title: 'Galeri 3', category: 'kenangan' },
    { size: 'large', title: 'Galeri 4', category: 'kenangan' },
    { size: 'small', title: 'Galeri 5', category: 'kenangan' },
    { size: 'small', title: 'Galeri 6', category: 'kenangan' },
    { size: 'large', title: 'Galeri 7', category: 'kenangan' },
    { size: 'small', title: 'Galeri 8', category: 'kenangan' },
    { size: 'small', title: 'Galeri 9', category: 'kenangan' },
    { size: 'large', title: 'Galeri 10', category: 'kenangan' },
    { size: 'large', title: 'Galeri 11', category: 'kenangan' },
    { size: 'small', title: 'Galeri 12', category: 'kenangan' },
    { size: 'small', title: 'Galeri 13', category: 'kenangan' },
    { size: 'large', title: 'Galeri 14', category: 'kenangan' },
    { size: 'small', title: 'Galeri 15', category: 'kenangan' },
    { size: 'small', title: 'Galeri 16', category: 'kenangan' },
    { size: 'small', title: 'Galeri 17', category: 'kenangan' },
    { size: 'medium', title: 'Galeri 18', category: 'kenangan' },
    { size: 'large', title: 'Galeri 19', category: 'kenangan' },
    { size: 'small', title: 'Galeri 20', category: 'kenangan' },
    { size: 'small', title: 'Galeri 21', category: 'kenangan' },
    { size: 'small', title: 'Galeri 22', category: 'kenangan' },
    { size: 'medium', title: 'Galeri 23', category: 'kenangan' },
    { size: 'large', title: 'Galeri 24', category: 'kenangan' },
];

let currentImageIndex = 0;
let allMasonryItems = [];
let firestore = null;
let storage = null;

try {
    if (window.firebaseConfigExists && window.firebaseConfig && Object.keys(window.firebaseConfig).length) {
        firebase.initializeApp(window.firebaseConfig);
        firestore = firebase.firestore();
        storage = firebase.storage();
        console.log('Firebase initialized on public page');
    }
} catch (e) {
    console.log('Firebase not initialized on public page', e);
}

// IndexedDB helper used by the public gallery page (same DB as admin)
function openDB() {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) return reject(new Error('IndexedDB not supported'));
        const request = indexedDB.open('galleryDB', 1);
        request.onupgradeneeded = function(e) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('photos')) {
                db.createObjectStore('photos', { keyPath: 'id' });
            }
        };
        request.onsuccess = function(e) { resolve(e.target.result); };
        request.onerror = function(e) { reject(e.target.error); };
    });
}

function getAllPhotosFromDB() {
    return openDB().then(db => new Promise((resolve, reject) => {
        const tx = db.transaction('photos', 'readonly');
        const store = tx.objectStore('photos');
        const req = store.getAll();
        req.onsuccess = function(e) { resolve(e.target.result || []); };
        req.onerror = function(e) { reject(e.target.error); };
    })).catch(() => []);
}

// Load hero background from localStorage
async function loadHeroBg() {
    const heroBanner = document.querySelector('.hero-banner');
    if (!heroBanner) return;

    let heroBg = null;
    if (typeof firestore !== 'undefined' && firestore) {
        try {
            const doc = await firestore.collection('settings').doc('heroBg').get();
            if (doc.exists) heroBg = doc.data().imageUrl;
        } catch (e) {
            console.error('Error loading hero bg from Firestore:', e);
        }
    }

    if (!heroBg) heroBg = localStorage.getItem('heroBgImage');

    if (heroBg) {
        heroBanner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroBg}')`;
        heroBanner.style.backgroundSize = 'cover';
        heroBanner.style.backgroundPosition = 'center';
    }
}

// Load gallery from localStorage
async function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    let photos = [];
    // If Firestore is available, load from there
    if (firestore) {
        try {
            const snapshot = await firestore.collection('photos').orderBy('id', 'desc').get();
            photos = snapshot.docs.map(doc => doc.data());
        } catch (e) {
            console.error('Error loading from Firestore:', e);
            // fallback to IndexedDB/localStorage
            try {
                photos = await getAllPhotosFromDB();
            } catch (err) { photos = []; }
        }
    } else {
        try {
            photos = await getAllPhotosFromDB();
        } catch (e) {
            photos = [];
        }
    }

    // Fallback to localStorage if still empty
    if (!photos || photos.length === 0) {
        photos = JSON.parse(localStorage.getItem('galleryPhotos') || '[]');
    }

    const displayPhotos = photos.length > 0 ? photos : createPlaceholderPhotos();

    displayPhotos.forEach((photo, index) => {
        const masonrySize = masonryData[index % masonryData.length].size;
        const masonryItem = document.createElement('div');
        masonryItem.className = `masonry-item ${masonrySize}`;
        masonryItem.innerHTML = `
            <img src="${photo.imageUrl}" alt="${photo.title}">
            <div class="masonry-item-overlay">
                <div class="masonry-item-text">
                    <h3>${photo.title}</h3>
                    <p><a href="#" onclick="openModal(event)" style="color: white; text-decoration: underline;">Lihat Besar</a></p>
                </div>
            </div>
        `;
        galleryGrid.appendChild(masonryItem);
    });

    allMasonryItems = document.querySelectorAll('.masonry-item img');
}

// Create placeholder photos
function createPlaceholderPhotos() {
    return [
        { title: 'Arsitektur Indah', imageUrl: 'https://images.unsplash.com/photo-1479839672679-a46482a0a7d8?w=500&h=500&fit=crop', category: 'kenangan' },
        { title: 'Interior Modern', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop', category: 'kenangan' },
        { title: 'Ruang Megah', imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=400&fit=crop', category: 'kenangan' },
        { title: 'Big Ben', imageUrl: 'https://images.unsplash.com/photo-1513179143335-69635dd1b63f?w=1000&h=500&fit=crop', category: 'kenangan' },
        { title: 'Patung Putih', imageUrl: 'https://images.unsplash.com/photo-1476979552168-a3f96cf0c90f?w=500&h=500&fit=crop', category: 'kenangan' },
        { title: 'Ruang Koloni', imageUrl: 'https://images.unsplash.com/photo-1512207736139-c1a9dab49bb4?w=500&h=500&fit=crop', category: 'kenangan' },
        { title: 'Kolumnade', imageUrl: 'https://images.unsplash.com/photo-1495467007313-e6bc43d33f25?w=500&h=500&fit=crop', category: 'kenangan' },
        { title: 'Balkon', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop', category: 'kenangan' },
        { title: 'Koridor', imageUrl: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=500&h=500&fit=crop', category: 'kenangan' }
    ];
}

// Open modal with image
function openModal(event) {
    if (event) event.preventDefault();

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    if (!modal || !modalImage) return;

    // Cari gambar dari .masonry-item terdekat dari elemen yang diklik
    let clickedSrc = null;
    if (event) {
        const masonryItem = event.target.closest('.masonry-item');
        if (masonryItem) {
            const img = masonryItem.querySelector('img');
            if (img) clickedSrc = img.src;
        }
        // Jika user klik langsung pada <img>
        if (!clickedSrc && event.target.tagName === 'IMG') {
            clickedSrc = event.target.src;
        }
    }

    if (!clickedSrc) clickedSrc = allMasonryItems[0]?.src;

    modalImage.src = clickedSrc;

    // Set index saat ini berdasarkan src yang diklik
    currentImageIndex = Array.from(allMasonryItems).findIndex(img => img.src === clickedSrc);
    if (currentImageIndex === -1) currentImageIndex = 0;

    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Change image in modal
function changeImage(direction) {
    if (allMasonryItems.length === 0) return;
    
    currentImageIndex += direction;
    
    // Loop around
    if (currentImageIndex >= allMasonryItems.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = allMasonryItems.length - 1;
    }
    
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.src = allMasonryItems[currentImageIndex].src;
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('imageModal');
    if (modal && modal.style.display === 'flex') {
        if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'Escape') {
            closeModal();
        }
    }
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Pesan kami telah diterima. Kami akan segera menghubungi Anda.');
        this.reset();
    });
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (modal && event.target === modal) {
        closeModal();
    }
});

// Initialize on page load
window.addEventListener('load', async function() {
    loadHeroBg();
    await loadGallery();
});
