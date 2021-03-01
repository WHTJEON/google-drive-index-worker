function getHumanReadableDateTime(string) {
    var date = new Date(string);
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    if (month <= 9) {
        month = '0' + month;
    }
    if (day <= 9) {
        day = '0' + day;
    }
    if (hours <= 9) {
        hours = '0' + hours;
    }
    if (minutes <= 9) {
        minutes = '0' + minutes;
    }
    if (seconds <= 9) {
        seconds = '0' + seconds;
    }
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' UTC';
}

function getHumanReadableSize(bytes) {
    if (bytes == 0) {
        return '0.00 B';
    }
    var e = Math.floor(Math.log(bytes) / Math.log(1000));
    return (bytes / Math.pow(1000, e)).toFixed(2) + ' ' + ['', 'k', 'M', 'G', 'T', 'P'][e] + 'B';
}

function updateMetadata() {
    var selector = document.querySelectorAll('td:nth-child(2)');
    for (var i = 0; i < selector.length; i++) {
        var element = selector[i];
        if (element.innerHTML != '') {
            element.innerHTML = getHumanReadableDateTime(element.innerHTML);
        }
    }
    selector = document.querySelectorAll('td:nth-child(3)');
    for (var i = 0; i < selector.length; i++) {
        var element = selector[i];
        if (element.innerHTML != '') {
            element.innerHTML = getHumanReadableSize(element.innerHTML);
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var markdown = window.markdownit();
            document.getElementById('readme-content').innerHTML = '<div class="ui segment">' + markdown.render(this.responseText) + '</div>';
            document.getElementById('readme-content').classList.remove('hidden');
        }
        if (this.readyState == 4) {
            document.getElementById('loader').classList.remove('active');
        }
    }
    xhr.open('GET', 'README.md');
    xhr.send();
}
