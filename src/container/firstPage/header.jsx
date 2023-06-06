import React, { Component } from 'react'
import '../../css/firstPage/header.css'





export default function header(props) {
  console.log(props)
  function kirish() {
    console.log('bosildi')
  }
  //  function tek(){
  //   var btn = document.getElementById('btn')
  //   var inp = document.getElementById('inp')
  //   if(inp.value.length >= 13)
  //   { 
  //     btn.classList.remove("disabled");
  //   }
  // }

  function tugma() {
    var inp1 = document.getElementById('inp1')
    var inp2 = document.getElementById('inp2')
    var inp3 = document.getElementById('inp3')
    var inp4 = document.getElementById('inp4')

    localStorage.setItem('inp1', inp1.value)
    localStorage.setItem('inp2', inp2.value)
    localStorage.setItem('inp3', inp3.value)
    localStorage.setItem('inp4', inp4.value)
  }

  function tasdiqlash(){
    var inp2 = document.getElementById('inp2')
    var inp21 = document.getElementById('inp21')
    if(inp2.value == "2" || inp21.value == "2")
    {
      window.open('footer.jsx', "_self")
    }
    else{
      
    }
  }

  return (
    <div className='header'>
      <div className='header1'>
        <div className='header_child1'>
          <div className='header_left'>
            <ul>
              <li><a href="">{props.data.header_left.a1}</a></li>
              <li><a href="">{props.data.header_left.a2}</a></li>
              <li><a href="">{props.data.header_left.a3}</a></li>
              <li><a href="">{props.data.header_left.a4}</a></li>
              <li><a href="">{props.data.header_left.a5}</a></li>
              <li><a href="">{props.data.header_left.a6}</a></li>
            </ul>
          </div>
          <div className='header_right'>
            <select name="" id="">
              <option value="">Рус</option>
              <option value="">O'zb</option>
            </select>
          </div>
        </div>
      </div>
      <div className='header2'>
        <div className='header_child2'>
          <div className='child2_left'>
            <a href=""><img src="https://elmakon.uz/images/logos/8/elmakon.png" alt="" /></a>
            <ul>
              <li><a href="">Смартфоны</a></li>
              <li><a href="">Ноутбуки</a></li>
              <li><a href="">Телевизоры</a></li>
              <li><a href="">Кондиционеры</a></li>
              <li><a href="">Холодильники</a></li>
            </ul>
          </div>
          <div className='child2_right'>
            <div className='right_img'>
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-bars"></i>
            </div>
            <div className='right_info'>
              <a href=""><span>+998-71-203-1203</span></a>
              <a href=""><p>Заказать обратный звонок</p></a>
            </div>
          </div>
        </div>
      </div>
      <div className='header3'>
        <div className='header_child3'>
          <button>
            <i class="fa-sharp fa-solid fa-bars"></i>
            <p>Каталог товаров</p>
          </button>
          <div className='srch'>
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='registration'>
            <a href="">
              <i class="fa-regular fa-registered"></i>

            </a>

            <button type="button" onClick={kirish} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Войти
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Тел</h1>

                  </div>
                  <div class="modal-body inline-flex justify-content-center">
                    <label htmlFor="">Имя
                    </label>
                    <br />
                    <input type="text" id='inp1' />
                    <br />
                    <label htmlFor="">Номер телефона
                    </label>
                    <br />
                    <input type="text" id='inp2' />
                    <br />
                    <label htmlFor="">Придумайте пароль
                    </label>
                    <br />
                    <input type="text" id='inp3' />
                    <br />
                    <label htmlFor="">Подтверждения пароль</label>
                    <br />
                    <input type="text" id='inp4' />
                    <br />
                  </div>
                  <div class="modal-footer d-flex justify-content-center flex-column">
                    <button type="button" id='btn' onClick={tugma} class="bg-warning border-0 w-75">Регистрация</button>



                    <button type="button" class="btn btn-primary w-75" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      Я уже зарегистрирован
                    </button>




                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header d-flex justify-content-center">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Войти в аккаунт</h1>
                    
                  </div>
                  <div class="modal-body">
                    <div class="modal-body d-flex flex-column  align-items-center">
                      <label htmlFor="">Номер телефона</label>
                      <br />
                      <input class="w-75" id='inp2' type="text" />
                      <br />
                      <label htmlFor="">Пароль</label>
                      <br />
                      <input class='w-75' id='inp21' type="text" />
                      <br />

                    </div>
                  </div>
                  <div class="modal-footer  flex-column">
                    <button type="button" onClick={tasdiqlash} class="bg-warning bg-gradient border-0  rounded-pill w-75 tex-white" data-bs-dismiss="modal">Войти</button>
                    <button type="button" class="w-75 bg-white text-info">Регистрация</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cart'>
            <a href="">
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Корзина</p>
            </a>

          </div>

        </div>
      </div>
      <div className='header4'>
        <div className='child_header4 '>

        </div>
      </div>

    </div>



  )

}


