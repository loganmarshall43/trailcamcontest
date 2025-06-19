// script.js

/*
import { ref, onValue, runTransaction }
  from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const images   = window.images || [];
const gallery  = document.getElementById('gallery');
const today    = new Date().toISOString().slice(0,10);
const votePath = `/votes/${today}`;

let voteCounts = {};

//today’s vote counts
onValue(ref(db, votePath), snap => {
  voteCounts = snap.val() || {};
  images.forEach(img => {
    if (voteCounts[img.id] == null) voteCounts[img.id] = 0;
  });
  renderGallery();
});

//Render grid of cards
function renderGallery() {
  const currentVote = sessionStorage.getItem(`voted-${today}`);
  gallery.innerHTML = '';

  images.forEach(img => {
    const count = voteCounts[img.id] || 0;
    const card  = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${img.src}" alt="${img.caption}">
      <p class="caption">${img.caption}</p>
      <p class="count">${count} votes</p>
      <button ${img.id===currentVote?'disabled':''}>
        ${img.id===currentVote?'Voted ✅':(currentVote?'Change Vote':'Vote')}
      </button>
    `;
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => submitVote(img.id));
    gallery.append(card);
  });
}

//Handle voting / changing vote
async function submitVote(newId) {
  const oldId = sessionStorage.getItem(`voted-${today}`);

  //change vote, decrement their count first
  if (oldId && oldId !== newId) {
    const oldRef = ref(db, `${votePath}/${oldId}`);
    await runTransaction(oldRef, curr => Math.max((curr || 1) - 1, 0));
  }

  // change vote increment the new selection
  const newRef = ref(db, `${votePath}/${newId}`);
  await runTransaction(newRef, curr => (curr || 0) + 1);

  // Persist
  sessionStorage.setItem(`voted-${today}`, newId);
  renderGallery();
}

renderGallery();
*/

// script.js

const images  = window.images || [];
const gallery = document.getElementById('gallery');

// Render the five placeholder cards
function renderGallery() {
  gallery.innerHTML = '';

  images.forEach(img => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <p class="category-caption">${img.caption}</p>
      <img src="${img.src}" alt="${img.caption}">
      <p class="subcaption">Coming Soon</p>
    `;

    gallery.append(card);
  });
}

// initialize
renderGallery();
