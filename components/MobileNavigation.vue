<template>
  <div class="mobile-navigation">
    <nav class="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li>
          <NuxtLink to="/">Accueil</NuxtLink>
        </li>

        <li class="menu-item-has-children">
          <NuxtLink to="#">ANGE</NuxtLink>
          <ul class="sub-menu">
            <li>
              <NuxtLink to="/presentation">À-propos</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/mot-du-directeur"> Mot du Directeur </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/mission-attribution">
                Missions & Attributions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/organigramme"> Organigramme </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/conseil-d-administration"> Conseil d'administration </NuxtLink>
            </li>
          </ul>
        </li>

        <li>
          <NuxtLink to="/prestations" exact-active-class="active-link"
            >Prestations</NuxtLink
          >
        </li>

        <li class="menu-item-has-children">
          <NuxtLink to="#">Publications</NuxtLink>
          <ul class="sub-menu">
            <li>
              <NuxtLink to="/actualite">Actualités</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/documentation">Documenthèque</NuxtLink>
            </li>

            <!-- <li>
              <NuxtLink to="/documentation">Textes législatifs</NuxtLink>
            </li> -->

            <li>
              <NuxtLink to="/marche-public">Marchés publics</NuxtLink>
            </li>
          </ul>
        </li>

        <!-- <li>
          <NuxtLink to="/prestations">Ev. Env</NuxtLink>
        </li> -->

        <li class="menu-item-has-children">
          <NuxtLink to="#">Projets</NuxtLink>
          <ul class="sub-menu">
            <li>
              <NuxtLink to="/projet/pqat">PQAT</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projet/qedd">QEDD</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projet/cbit">CBIT</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projet/paseit">PASIET</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projet/pnade">PNADE</NuxtLink>
            </li>
          </ul>
        </li>

        <li>
          <NuxtLink to="/plainte">Plaintes</NuxtLink>
        </li>

        <li class="menu-item-has-children">
          <NuxtLink to="#">Acteurs</NuxtLink>
          <ul class="sub-menu">
            <li>
              <a href="/pdf/CNCE-version-1.pdf"> CNCE </a>
            </li>

            <li>
              <a href="/pdf/LISTES DES CONSULTANTS & BUREAUX D'ETUDES.pdf"> Consultants agréés </a>
            </li>
          </ul>
        </li>

        <li>
          <NuxtLink to="/contactez-nous">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle("active");
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector(
        "#offcanvas-mobile-menu"
      );
      offcanvasMobileMenu?.classList.remove("active");
    };
  },
};
</script>

<style lang="scss">
.offcanvas-navigation {
  ul {
    padding-left: 0;
    li {
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      &.menu-item-has-children {
        .sub-menu {
          height: 0;
          opacity: 0;
          transition: 0.3s;
          visibility: hidden;
        }
        &.active > {
          .sub-menu {
            height: 100%;
            opacity: 1;
            visibility: visible;
            padding-left: 0;
          }
        }
      }
      a {
        color: $white;
        font-size: 16px;
        font-weight: 500;
        padding: 10px 0;
        display: block;
        &:hover {
          color: $primary;
        }
      }
    }
  }

  ul {
    &.sub-menu {
      margin-left: 15px;
      transition: 0.4s;
      li {
        list-style: none;
        border: none;
        a {
          color: $white;
          font-weight: 400;
          &:hover {
            color: $primary;
          }
        }
        .sub-menu {
          li {
            a {
              font-size: 13px;
              padding: 5px 0;
            }
          }
        }
      }
    }
    li {
      &.menu-item-has-children {
        position: relative;
        display: block;
        a {
          display: inline-block;
        }

        &.active > {
          .menu-expand {
            background-color: rgba($white, 0.2);
            i {
              &:before {
                transform: rotate(0);
              }
            }
          }
        }

        .menu-expand {
          top: 5px;
          right: 0;
          width: 35px;
          height: 35px;
          cursor: pointer;
          line-height: 35px;
          position: absolute;
          text-align: center;
          background-color: rgba($white, 0.1);
          &:hover {
            background-color: rgba($white, 0.2);
          }

          i {
            display: block;
            border-bottom: 1px solid $white;
            position: relative;
            width: 10px;
            text-align: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            &:before {
              width: 100%;
              content: "";
              border-bottom: 1px solid $white;
              display: block;
              position: absolute;
              top: 0;
              transform: rotate(90deg);
              transition: 0.4s;
            }
          }
        }
      }
    }
  }
}
</style>
