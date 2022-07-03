import React, { useState } from "react";

const AdvantagesSection = () => {
    return (
      <section className="sc advantages">
  <div className="grid-container">
    <div className="large-12 cell">
      <h2 className="sc__heading">Наші переваги</h2>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="cell large-4">
        <div className="advantages-item">
          <div className="advantages-item__image">
            <video width="300" height="200" autoPlay loop muted>
              <source src="/fire_icons/scheme.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="advantages-item__text">
            <b>Стабільність і надійність.</b> Ми націлені на довгострокове та
            взаємовигідне співробітництво, тому гарантуємо своєчасне постачання
            електроенергії, вугілля та газу.
          </div>
        </div>
      </div>
      <div className="cell large-4">
        <div className="advantages-item">
          <div className="advantages-item__image">
            <video width="300" height="200" autoPlay loop muted>
              <source src="/fire_icons/bulb.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="advantages-item__text">
            Допомогти підприємствам<br/>
            <b>оптимізувати витрати й підвищити енергоефективність</b> шляхом
            отримання послуг високого рівня.
          </div>
        </div>
      </div>
      <div className="cell large-4">
        <div className="advantages-item">
          <video width="300" height="200" autoPlay loop muted>
            <source src="/fire_icons/checkmark.mp4" type="video/mp4" />
          </video>
          <div className="advantages-item__text">
            Запропонувати вигідну кінцеву вартість енергоресурсів та
            <b>забезпечити індивідуальний сервіс</b> для бізнесу.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default AdvantagesSection
