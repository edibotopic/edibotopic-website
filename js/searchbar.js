document.getElementById('searchInput').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase()
    let links = document.querySelectorAll('.post')

    links.forEach(function(link) {
        let linkText = link.innerText.toLowerCase()
        let metaInfo = link.getAttribute('data-meta').toLowerCase()

        if (linkText.includes(searchTerm) || metaInfo.includes(searchTerm)) {
            link.style.display = 'block'
        } else {
            link.style.display = 'none'
        }
    })
})
