
     let colorSelect = document.getElementById('colorSelect');

 
     colorSelect.addEventListener('change', function() {
        
         document.body.style.backgroundColor = this.value;
     });