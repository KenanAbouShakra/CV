document.getElementById('show-more-btn').addEventListener('click', function() {
  var extraJobs = document.querySelector('.extra-jobs');
  if (extraJobs.style.display === 'none' || extraJobs.style.display === '') {
    extraJobs.style.display = 'block';
    this.textContent = 'Vis mindre';
  } else {
    extraJobs.style.display = 'none';
  }
});
