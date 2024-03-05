import viteLogo from '/vite.svg'

function Utama() {
    return ( 
        <>
<div>
  <title>Bootstrap Theme Simply Me</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
  <style dangerouslySetInnerHTML={
    {__html: "\n        body {\n font: 20px Montserrat, sans-serif;\n     line-height: 1.8;\n            color: #f5f6f7;\n        }\n\n        p {\n            font-size: 16px;\n        }\n\n        .margin {\n            margin-bottom: 45px;\n        }\n        .bg-1 {\n            background-image: url('https://live.staticflickr.com/4437/36219239340_d30eb2b318_b.jpg');\n            background-size: cover;\n            background-position: center;\n            background-repeat: no-repeat;\n            color: #ADD8E6;\n        }\n        .bg-1 h3 {\n            font-family: 'Times New Roman', Times, serif;\n            font-weight: bold;\n        }\n        .bg-2 { \n            background-color: #ADD8E6; \n            color: #000000;\n        }\n        .bg-2 h3 {\n            font-family: 'Times New Roman', Times, serif;\n            font-weight: bold;\n        }\n        .bg-3 { \n            background-color: #ADD8E6; \n            color: #000000;\n        }\n        .bg-3 h3 {\n            font-family: 'Times New Roman', Times, serif;\n            font-weight: bold;\n        }\n        .bg-4 { \n            background-color: #ede2e2; \n            color: #171717;\n        }\n        .container-fluid {\n            padding-top: 70px;\n            padding-bottom: 70px;\n        }\n        .navbar {\n            padding-top: 15px;\n            padding-bottom: 15px;\n            border: 0;\n            border-radius: 0;\n            margin-bottom: 0;\n            font-size: 12px;\n            letter-spacing: 5px;\n        }\n        .navbar-nav li a:hover {\n            color: #1abc9c !important;\n        }\n        .social-link {\n            display: inline-block;\n            text-align: center;\n            margin: 0 10px; /* Atur jarak antara setiap ikon dan teks */\n        }\n\n        .social-icon {\n            width: 30px;\n            height: 30px;\n            border-radius: 15px; /* Sesuaikan nilai sesuai kebutuhan */\n        }\n\n        .social-text {\n            display: block;\n            margin-top: 5px; /* Atur jarak antara ikon dan teks */\n        }\n\n    " }} />
  {/* Navbar */}
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">Beranda Saya</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Profil</a></li>
          <li><a href="#">Biodata</a></li>
          <li><a href="#">Pengalaman</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container-fluid bg-1 text-center">
    <h3 className="margin">Halaman Utama</h3>
    <img src="https://th.bing.com/th?id=OIP.cYXaClaf-edhYefvysk51gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" className="img-responsive img-circle margin" style={{display: 'inline', width: 150, height: 150, borderRadius: '50%'}} alt="Bird" />
  </div>
  <div className="container-fluid bg-3 text-center">
    <h3 className="margin">PROFIL SINGKAT</h3><br />
    <div className="row">
      <div className="col-sm-4">
        <img src="https://scontent.fbwx2-1.fna.fbcdn.net/v/t39.30808-6/234201055_842213339769440_6019025420784098741_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEAQvEtvVXrw0GWWN-NytOwffvqEYJj5AN9--oRgmPkA9xrxkfKRF2mwbomBoo_PLpUKq1VcHFOiwTjOH-hjy5Y&_nc_ohc=cpQvUgOoNTYAX-YEW9N&_nc_ht=scontent.fbwx2-1.fna&oh=00_AfAuhja6rcNim864Y_cedYdxasO5n9_doi9hhDjZ74FnsA&oe=65E9E1C0" className="img-responsive margin rounded" style={{width: 350, height: 400, borderRadius: 15}} alt="Image" />
        <p>Hii, Namaku Cici aku lahir, Tinggal Dan besar di Banyuwangi</p>
      </div>
      <div className="col-sm-4">
        <img src="https://scontent.fbwx2-1.fna.fbcdn.net/v/t1.6435-9/78090969_448870345770410_9073515173288869888_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeErUBRdIq_ye_30q8hSyWjQrU7JLQWrALStTsktBasAtPmuqdsCxlqZdfgnAD3mhqA95nwPPJ5oKyCjcjdS-lxO&_nc_ohc=-Ip8y7N24O8AX_oCY9R&_nc_ht=scontent.fbwx2-1.fna&oh=00_AfBMvkEwqI-GR7xQ8nD2esfqUQB44vm5X0YLZMGQK00vDA&oe=660C3B61" className="img-responsive margin rounded" style={{width: 350, height: 400, borderRadius: 15}} alt="Image" />
        <p>Biodata</p>
        <p>Banyuwangi, 31 Januari</p>
        <p>Nim 1122102089</p>
        <p>Kuliah di STIKOM PGRI BANYUWANGI</p>
      </div>
      <div className="col-sm-4">
        <img src="https://scontent.fbwx2-1.fna.fbcdn.net/v/t1.6435-9/73460739_426126518044793_6960281419868274688_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeH_aSFci9ietRtAWZG0C8OYJDTThPHq9yckNNOE8er3J1Y8ZC8YUjaDMHqz1idzlAYlQWeMY30Yir9yeDbumUez&_nc_ohc=xJDob7DvkbYAX954SIe&_nc_ht=scontent.fbwx2-1.fna&oh=00_AfDWIzRWbfw8p5_efsgnhFk7-F4Cyic6x6GtxfLT490o1g&oe=660C283A" className="img-responsive margin rounded" style={{width: 350, height: 400, borderRadius: 15}} alt="Image" />
        <p>Aku memiliki Banyak pengalaman di Bidang Olahraga, Tetapi untuk saat ini aku memilih vakum dan berfokus di kegiatan Kuliahku.</p>
      </div>
    </div>
  </div>
  {/* Footer */}
  <footer className="container-fluid bg-4 text-center">
    <p>
      Follow me on:
    </p><div />
    <a href="https://wa.me/123456789" target="_blank" className="social-link">
      <img src="https://i.pinimg.com/474x/42/50/a3/4250a36a77c5a8e3e4e06b99a6134fa7.jpg" alt="Tiktok" className="social-icon" />
      <span className="social-text">@23ceceee</span>
    </a>
    <a href="https://www.instagram.com/" target="_blank" className="social-link">
      <img src="https://i.pinimg.com/474x/b4/fc/64/b4fc644b69f7ce1bc5871435b35773f8.jpg" alt="Instagram" className="social-icon" />
      <span className="social-text">@cici052</span>
    </a>
    <p />
  </footer>
</div>
        </>
     );
}

export default Utama;