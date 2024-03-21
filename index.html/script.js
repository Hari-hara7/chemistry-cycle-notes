document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var searchInput = document.getElementById('searchInput').value.toUpperCase();
    var subjects = ['ADLD', 'BEE', 'BIO EVS', 'CPP', 'IT SKILL', 'EV', 'MATHS', 'CHEMISTRY'];
    for (var i = 0; i < subjects.length; i++) {
        if (subjects[i].toUpperCase() === searchInput) {
            openGoogleDrive(subjects[i]);
            return;
        }
    }
    alert('Subject not found!');
});

function openGoogleDrive(subject) {
    // Redirect to Google Drive link based on the subject
    switch (subject) {
        case 'ADLD':
            window.location.href = 'https://drive.google.com/drive/folders/16T2_I_JIEisswgPj4Xk6S_OY_DTtCklG';
            break;
        case 'BEE':
            window.location.href = 'https://drive.google.com/drive/folders/19sv3ZFsqBuNxB3Ltuyu6YwYJLh_86q__';
            break;
        case 'BIO EVS':
            window.location.href = 'https://drive.google.com/drive/folders/13K6Hwh_bkWi1hBb9iYAJf6nQcS6In0AQ';
            break;
        case 'CPP':
            window.location.href = 'https://drive.google.com/drive/folders/134H9d31TReG8O_qgglnE9qqgctLtEv-z';
            break;
        case 'IT SKILL':
            window.location.href = 'https://drive.google.com/drive/folders/11qYDOnYNVIRyVNSYOFan64n-RHn8ozIa';
            break;
        case 'EV':
            window.location.href = 'https://drive.google.com/drive/folders/1EBRbMBS6r42GQ60k8O4AdkiC_0muZ1TF';
            break;
        case 'MATHS':
            window.location.href = 'https://drive.google.com/drive/folders/1DL06euTxLjK1GWH2AFPaB1Yfd5mxf_8j';
            break;
        case 'CHEMISTRY':
            window.location.href = 'https://drive.google.com/drive/folders/11s9sgR-Hpb40p2tVlsetlBWcE6UPIubO';
            break;
        default:
            break;
    }
}