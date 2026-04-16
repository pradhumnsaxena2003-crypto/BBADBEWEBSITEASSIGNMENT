document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("inquiryForm");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        
        const name = document.getElementById("name").value;
        const service = document.getElementById("service-type").value;
        
        // Dynamic alert based on selection
        alert(`Request Confirmed!\n\nThank you, ${name}. We have received your inquiry regarding our [${service}] services. Our dispatch team will contact you within 15 minutes.`);
        
        form.reset(); 
    });
});