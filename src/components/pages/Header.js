import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Nike
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Кроссовки
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Кеды
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Футболки
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Шорты
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Майки
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Олимпийки
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Толстовки
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <h1>Nike</h1>
            <p className="text-none">
              Пракктиная одежда, удобная Шорты от китайского производителя
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
