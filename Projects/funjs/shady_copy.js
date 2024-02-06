
document.getElementById('copy_me').addEventListener( 
'copy', function(e) { 
    e.clicpboardData.setData('text/plain', 
        'HACKERMAN' 
    ); 
    e.preventDefault(); 
}); 
