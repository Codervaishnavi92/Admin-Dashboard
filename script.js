// Smooth Counter Animation
document.querySelectorAll('.count').forEach(counter => {
  const target = +counter.dataset.target;
  let current = 0;

  const update = () => {
    const increment = target / 120;
    current += increment;

    if (current < target) {
      counter.innerText = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

// Chart
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      label: 'Users',
      data: [450, 600, 700, 480, 760, 650],
      backgroundColor: '#6366f1',
      borderRadius: 10
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500
    }
  }
});
