function Home() {
  return (
    <>
      <div
        id="carousel_panaderia"
    className="carousel slide slider position-absolute"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner slider__content ">
          <div   className="carousel-item active">
            <img
              src="../Imagenes/slide1.jpg"
              alt="Imagen panaderia"
            className="d-block "
            />
          </div>
          <div   className="carousel-item">
            <img
              src="../Imagenes/slide2.jpg"
              alt="Imagen panaderia"
            className="d-block"
            />
          </div>
          <div   className="carousel-item">
            <img
              src="../Imagenes/slide3.jpg"
              alt="Imagen panaderia"
            className="d-block"
            />
          </div>
          <div   className="carousel-item ">
            <img
              src="../Imagenes/slide4.jpg"
              alt="Imagen panaderia"
            className="d-block "
            />
          </div>
          <div   className="carousel-item">
            <img
              src="../Imagenes/slide5.jpg"
              alt="Imagen panaderia"
            className="d-block"
            />
          </div>
          <div   className="carousel-item">
            <img
              src="../Imagenes/slide6.jpg"
              alt="Imagen panaderia"
            className="d-block"
            />
          </div>
        </div>
      </div>

      <main  className="home container d-flex flex-row">
        <button
        className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel_panaderia"
          data-bs-slide="prev"
        >
          <span  className="carousel-control-prev-icon"></span>
        </button>
        <button
        className="carousel-control-next"
          type="button"
          data-bs-target="#carousel_panaderia"
          data-bs-slide="next"
        >
          <span  className="carousel-control-next-icon"></span>
        </button>

        <picture className="picture">
          {" "}
          <img
        className="principal_bakery__img"
            src="./Imagenes/carlo's bakery.png"
            alt=""
          />
        </picture>
      </main>
    </>
  );
}
export default Home;
