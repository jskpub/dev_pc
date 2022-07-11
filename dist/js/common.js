"use strict";

/*
 = Common
*/
// + openUserControl
var openUserControl = function openUserControl() {
  $('.btn-open-usercontrol').on('click', function () {
    $('.user-control').toggleClass('on');
  });
}; // + selectedTabList


var selectedTabList = function selectedTabList() {
  $('.tab-event > li > a').on('click', function (e) {
    var target = $(e.currentTarget),
        tabList = target.closest('.co-tab-list'),
        tabControl = target.attr('id'),
        tabContList = $(".tab-content[aria-labelledby=".concat(tabControl, "]")).closest('.tab-cont-wrap');
    tabList.find(' > li > a').removeClass('on').attr('aria-selected', 'false');
    target.addClass('on').attr('aria-selected', 'true');
    tabContList.find('.tab-content').removeClass('on').attr('tabindex', -1);
    $(".tab-content[aria-labelledby=".concat(tabControl, "]")).addClass('on').attr('tabindex', 0);
  });
}; // +  toggleAccordion


var toggleAccordion = function toggleAccordion() {
  $('.co-accrodion-list').on('click', '.btn-accrodion', function (e) {
    e.preventDefault();
    var target = $(e.currentTarget),
        accordionBox = target.closest('.co-accordion'),
        accordionPanel = target.next('.accrodion-panel'),
        accordionPanelHeight = accordionPanel.children('.panel-cont').outerHeight();

    if (accordionBox.hasClass('on') && accordionPanel.is(':visible')) {
      accordionPanel.slideUp(350, function () {
        accordionBox.removeClass('on').find('.is-blind').text('접기');
      });
    } else {
      accordionBox.addClass('on').find('.is-blind').text('펼치기');
      accordionPanel.slideDown(350);
    }
  });
}; // + goToTop


var goToTop = function goToTop() {
  $('.btn-go-top').on('click', function () {
    $('html, body').stop().animate({
      scrollTop: '0'
    }, 500);
  });
};
/*
	= Main
*/
// + MainContSideNav


var mainContSideNav = function mainContSideNav() {
  var mainContentsArea = $('.main-container').find('.main-contents-area').innerHeight(),
      mainContSideNav = $('.main-container').find('.checkup-sidebar');
  mainContSideNav.css('max-height', mainContentsArea);
}; // + rollingTxtBanner


var rollingTxtBanner = function rollingTxtBanner() {
  var $rollingPrevbtn = $('.rolling-banner').find('.prev-btn'),
      $rollingNextbtn = $('.rolling-banner').find('.next-btn'),
      duration = 1000;
  var $nowFirstRow = null,
      rollingTxtList = null; // Auto Rolling

  var rollingAuto = setInterval(function () {
    rollingTxtList = $('.rolling-banner > .list');
    $nowFirstRow = rollingTxtList.children('li:first-child');

    var listRow = function listRow() {
      $nowFirstRow.appendTo(rollingTxtList).show(duration);
    };

    $nowFirstRow.hide(duration, listRow);
  }, 2000); // Prev Btn

  $rollingPrevbtn.on('click', function () {
    rollingTxtList = $('.rolling-banner > .list');
    $nowFirstRow = rollingTxtList.children('li:last-child');

    var listRow = function listRow() {
      $nowFirstRow.prependTo(rollingTxtList).show(duration);
    };

    $nowFirstRow.hide(duration, listRow);
  }); // Next Btn

  $rollingNextbtn.on('click', function () {
    rollingTxtList = $('.rolling-banner > .list');
    $nowFirstRow = rollingTxtList.children('li:first-child');

    var listRow = function listRow() {
      $nowFirstRow.appendTo(rollingTxtList).show(duration);
    };

    $nowFirstRow.hide(duration, listRow);
  });
}; // + sideMenuToggle


var sideMenuToggle = function sideMenuToggle() {
  $('.sidebar-menu > li').on('click', '> a', function (e) {
    e.preventDefault();
    var seletedMenu = $(e.currentTarget),
        sideMenuList = $('.sidebar-menu > li > a'),
        sidebarSubMenuList = $('.sidebar-menu ul');

    if (seletedMenu.hasClass('on') && seletedMenu.next().is(':visible')) {
      sideMenuList.removeClass('on');
      seletedMenu.next().slideUp();
    } else {
      sideMenuList.removeClass('on');
      seletedMenu.addClass('on');

      if (seletedMenu.next().is(':visible') == 0) {
        sidebarSubMenuList.stop().slideUp(350);
      }

      seletedMenu.next().stop().slideToggle(350);
    }
  });
}; // 검진센터 탐방


var rsvCenterFloatingRight = function rsvCenterFloatingRight() {
  var fixHeaderHeight = $('.header').height(),
      currentLayoutOffsetY = $('.visiting-center-section').offset().top,
      panelMargin = 40;
  $(window).on('scroll', function () {
    var nowScrollY = $(window).scrollTop() + fixHeaderHeight;
    var topPos = parseInt(nowScrollY - 175); // contents spacing

    console.log(nowScrollY);

    if (nowScrollY > currentLayoutOffsetY) {
      $('.floating-box').stop().animate({
        top: topPos
      }, 300, 'linear');
    } else if (nowScrollY <= currentLayoutOffsetY) {
      $('.floating-box').stop().animate({
        top: 0
      }, 300, 'linear');
    }
  });
};
/*
 = Popup
*/
// + openPopup


var openPopup = function openPopup() {}; // + btnOpenPopup


var btnOpenPopup = function btnOpenPopup() {
  $('.btn-open-popup').on('click', function (e) {
    var target = $(e.currentTarget),
        selectedTarget = target.attr('data-target'); // popup show

    $('.c-layer-popup' + selectedTarget).addClass('show').attr('aria-hidden', false);
  });
}; // + btnClosePopup


var btnClosePopup = function btnClosePopup() {
  $('.c-modal-header .popup-cls-btn, .c-modal-footer .popup-cls-btn').on('click', function (e) {
    var target = $(e.currentTarget); // popup hide

    target.parents('.c-layer-popup').attr('aria-hidden', true).removeClass('show');
  });
}; // medical input


var doctorInfo = function doctorInfo() {
  $('.btn-doctor-detail').on('click', function (e) {
    var target = $(e.currentTarget),
        targetName = target.data('name'),
        detailInfo = $('.doctor-detail-info');
    $('.doctor-card').removeClass('on');
    target.addClass('on');
    detailInfo.removeClass('on');
    $('.medical-team-list').find("[data-target=\"".concat(targetName, "\"]")).addClass('on'); //  alert(detailInfo);
  });
}; // = Reservation


var reserveContSideNav = function reserveContSideNav() {
  var reserveContentsArea = $('.resevation-container').find('.reserve-contents-area').innerHeight(),
      reserveContSideNav = $('.resevation-container').find('.reservation-sidebar');
  reserveContSideNav.css('max-height', reserveContentsArea);
}; // + 검진항목 선택


var checkupProduct = function checkupProduct() {
  $('.btn-chkupproduct-select').on('click', function (e) {
    var targetCard = $(e.currentTarget),
        nowChkupCard = targetCard.closest('.institution-detail-card');
    $('.institution-datail-list .institution-detail-card').removeClass('on');
    nowChkupCard.addClass('on');
  });
};

var btmCompareBar = function btmCompareBar() {
  $('.btn-bar-toggle').on('click', function () {
    $(this).toggleClass('is-open');

    if ($(this).hasClass('is-open')) {
      $(this).find('.is-blind').text('접기');
    } else {
      $(this).find('.is-blind').text('펼치기');
    }
  });
}; // 대상자 선택 활성화


var clientActiveCard = function clientActiveCard() {
  $('.client-card.person').on('click', function (e) {
    var target = $(e.currentTarget),
        cliendCardList = $('.targets-list').find('.client-card.person');
    cliendCardList.removeClass('on');
    target.addClass('on');
  });
}; // = institution-list


var institutionContDetail = function institutionContDetail() {
  var institutionWidth = $('.institution-list').width();
  $('.institution-datail-wrap').css('width', institutionWidth);
};

$('.rsv-institution-card > a').on('click', function (e) {
  e.preventDefault();
  var target = $(e.currentTarget),
      targetDataName = target.data('name'),
      rsvCardList = $('.rsv-institution-list').find('.rsv-institution-card'),
      rsvDetailView = $('.rsv-institution-list-wrap').find('.detail-card-list');
  rsvCardList.removeClass('on');
  target.parents('.rsv-institution-card').addClass('on');
  rsvDetailView.find('.rsv-institution-datail-field').removeClass('on');
  rsvDetailView.find(".rsv-institution-datail-field[data-target=".concat(targetDataName, "]")).addClass('on');
});
institutionContDetail(); // = 함수 호출

openUserControl();
goToTop();
sideMenuToggle();
btnOpenPopup();
btnClosePopup();
selectedTabList();
$(window).on('load resize', function () {});
//# sourceMappingURL=maps/common.js.map
