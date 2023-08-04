export default function downloadCV() {
    fetch('Curriculum-Vitae-Henry-Lucca.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Curriculum-Vitae-Henry-Lucca.pdf';
          alink.click();
      })
  })
}