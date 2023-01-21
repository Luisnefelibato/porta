//hide a div?
.home__buttons{
    flex-direction: column;
  }

  .home__handle{
    width: 150px;
    height: 130px;
  }
  .home__img{
    width: 130px;
  }
  .about__info{
    grid-template-columns: repeat(2, 1fr);
  }
  .skills__box{
    column-gap: 1rem;
  }
  .skills__name{
    font-size: var(--small-font-size);
  }
  .services__container{
    grid-template-columns: 145px;
    justify-content: center;
  }
  .work__item{
    font-size: var(--small-font-size);
  }
  .work__filters{
    column-gap: .25rem;
  }
}
/* For medium devices */
@media screen and (min-width: 576px){
  .nav__menu{
    width: 328px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .about__info{
    grid-template-columns: repeat(3, 140px);
    justify-content: center;
  }
  .about__description{
    padding: 0 5rem;
  }
  .about__description-en{
    padding: 0 5rem;
  }
  .skills__container{
    justify-content: center;
  }
  .skills__content{
    padding: 2rem 4rem;
  }
  .services__container{
    grid-template-columns: repeat(2, 160px);
    justify-content: center;
  }
  .services__modal-content{
    width: 500px;
    padding: 4.5rem 2.5rem 2.5rem;
  }
  .services__modal-description{
    padding: 0 3.5rem;
  }
  .work__container{
    justify-content: center;
  }
  .work__img{
    width: 295px;
  }
  .contact__info{
    grid-template-columns: 300px;
    justify-content: center;
  }
}

@media screen and (min-width: 767px){
  .work__container{
    grid-template-columns: repeat(2, 300px);
    justify-content: center;
  }
  .contact__container{
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    column-gap: 3rem;
  }
}
/* For large devices */
@media screen and (min-width: 992px){
  .container{
    margin-left: auto;
    margin-right: auto;
  }
.section{
  padding: 6.5rem 0 1rem;
}
}
