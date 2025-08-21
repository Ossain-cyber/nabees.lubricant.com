
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
  var form = document.querySelector('form[data-working="formsubmit"]');
  if(form){
    form.addEventListener('submit', function(){
      // nice client-side feedback - actual delivery handled by formsubmit service
      setTimeout(function(){
        alert('Thank you — your message was sent. Check the email configured to receive form submissions.');
      }, 400);
    });
  }
});
