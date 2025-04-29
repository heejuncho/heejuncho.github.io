


// Disable drag for all images
document.querySelectorAll('Profile.cr_sidebar.png').forEach(img => {
  img.ondragstart = () => false;
  img.setAttribute('draggable', false);
});
