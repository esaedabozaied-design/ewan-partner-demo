/**
 * إيوان للمطابخ والخزائن — منصة شركاء التطوير العقاري وتجربة QR التفاعلية
 * (Partner QR Kitchen Configurator, 6-Finish Color Switcher, Live Quote & Developer Infographic)
 */
(function () {
  'use strict';

  /* ================= 1. بيانات الوحدات السكنية (نماذج الشقق المرتبطة بالـ QR) ================= */
  var UNITS = [
    {
      id: 'unit-a',
      code: 'نموذج الشقة A',
      title: 'شقة غرفتين وصالة — تصميم عصري',
      dims: '3.0 × 4.0 م',
      area: '12.0 م²',
      wallLength: '3.0 م',
      sideLength: '1.8 م',
      corridor: '2.4 م',
      multiplier: 1.0,
      desc: 'مطبخ عملي بمدخل مباشر من منطقة المعيشة وجدار خدمات موحّد للسباكة والكهرباء.'
    },
    {
      id: 'unit-b',
      code: 'نموذج الشقة B',
      title: 'شقة 3 غرف وصالة — عائلية رحبة',
      dims: '3.6 × 4.2 م',
      area: '15.1 م²',
      wallLength: '3.6 م',
      sideLength: '2.2 م',
      corridor: '2.6 م',
      multiplier: 1.18,
      desc: 'مساحة مطبخ أوسع تسمح بامتداد تحضير إضافي أو صف تخزين مقابل مع حركة مريحة.'
    },
    {
      id: 'unit-c',
      code: 'نموذج تاون هاوس / بنتهاوس C',
      title: 'وحدة مفتوحة على منطقة الطعام',
      dims: '4.2 × 4.8 م',
      area: '20.2 م²',
      wallLength: '4.2 م',
      sideLength: '2.6 م',
      corridor: '2.9 م',
      multiplier: 1.38,
      desc: 'مساحة رحبة مثالية للمطابخ المتوازية أو الجزيرة الوسطية وأعمدة التموين والأجهزة المدمجة.'
    }
  ];

  /* ================= 2. باقات التجهيز الثلاث لنفس المساحة (A / B / C) ================= */
  var PACKAGES = [
    {
      id: 'A',
      badge: 'الباقة A — الأساسية',
      name: 'مساحة عملية متكاملة',
      layout: 'توزيع خطي (Single Wall)',
      basePrice: 18000,
      warranty: 'ضمان 10 سنوات على هيكل الـ PVC',
      desc: 'صف واحد متناسق يترك مساحة الحركة مفتوحة ويوفّر كامل احتياجات الغسيل والتحضير والطهي.',
      features: [
        'هيكل داخلي كامل من ألواح PVC Foam Board المقاومة للماء والرطوبة',
        'وحدات سفلية وعلوية بارتفاع قياسي وتوزيع عملي',
        'مفصلات وسكك أدراج بإغلاق ناعم (Soft-Close)',
        'شامل الحوض والخلاط الأساسي والتركيب'
      ]
    },
    {
      id: 'B',
      badge: 'الباقة B — المتوسطة (الأكثر طلبًا)',
      name: 'توازن يومي وتخزين أعلى',
      layout: 'توزيع حرف L',
      basePrice: 24000,
      warranty: 'ضمان 10 سنوات للهيكل + حتى 25 سنة للخامات المختارة',
      desc: 'امتداد جانبي يضاعف سطح التحضير مع خزائن علوية ممتدة واستغلال ذكي للزاوية.',
      features: [
        'هيكل داخلي كامل من ألواح PVC Foam Board المقاومة للماء والرطوبة',
        'توزيع حرف L مع خزائن علوية إضافية لاستثمار الارتفاع',
        'أدراج تحضير عميقة بسكك مخفية وإغلاق ناعم',
        'إضاءة LED مخفية دافئة أسفل الخزائن العلوية'
      ]
    },
    {
      id: 'C',
      badge: 'الباقة C — المميزة',
      name: 'تخزين شامل أو جزيرة وسطية',
      layout: 'توزيع متوازي / جزيرة (Galley / Island)',
      basePrice: 31000,
      warranty: 'ضمان 10 سنوات للهيكل + حتى 25 سنة للخامات المختارة',
      desc: 'صف خدمة رئيسي مع صف تخزين مقابل أو جزيرة وسطية وكابينة مخصصة للأجهزة المدمجة والتموين.',
      features: [
        'هيكل داخلي كامل من ألواح PVC Foam Board بسماكات موثّقة',
        'صف خدمة رئيسي + صف مقابل أو جزيرة تحضير وضيافة',
        'عمود مخصص للفرن والميكروويف المدمج + وحدة تموين',
        'أنظمة مفصلات وسكك سحب متقدمة + إضاءة داخلية وخارجية'
      ]
    }
  ];

  /* ================= 3. الألوان والتشطيبات الستة (مطابقة للموقع الرئيسي) ================= */
  var FINISHES = [
    {
      id: 'oak',
      name: 'بلوط فاتح طبيعي',
      desc: 'تشطيب بلوط طبيعي دافئ يمنح المساحة إشراقة واتساعًا بصريًا',
      color: '#cfa97e',
      extra: 0,
      img: 'assets/web/ai-c1-oak.jpg'
    },
    {
      id: 'walnut',
      name: 'جوز داكن فاخر',
      desc: 'تشطيب خشب الجوز الغني بعروقه الطبيعية المميزة لهوية إيوان',
      color: '#5a3a26',
      extra: 1800,
      img: 'assets/web/ai-c1-walnut.jpg'
    },
    {
      id: 'ivory',
      name: 'أبيض عاجي مطفي',
      desc: 'سطح ناعم مطفي يعكس الإضاءة ويمنح المطبخ طابعًا عصريًا هادئًا',
      color: '#f3efe6',
      extra: 0,
      img: 'assets/web/ai-c1-ivory.jpg'
    },
    {
      id: 'beige',
      name: 'بيج دافئ مطفي',
      desc: 'درجة رملية متوازنة تنسجم مع الأرضيات الحجرية والرخامية',
      color: '#d9cbb8',
      extra: 600,
      img: 'assets/web/ai-c1-beige.jpg'
    },
    {
      id: 'grey',
      name: 'رمادي دافئ مطفي',
      desc: 'طابع معماري حديث يجمع بين الحيادية والدفء وعملي للاستخدام اليومي',
      color: '#8f8881',
      extra: 900,
      img: 'assets/web/ai-c1-grey.jpg'
    },
    {
      id: 'charcoal',
      name: 'فحمي مطفي جريء',
      desc: 'حضور درامي فخم يتكامل مع الإضاءة المخفية والرخام الفاتح',
      color: '#2e2d2b',
      extra: 1500,
      img: 'assets/web/ai-c1-charcoal.jpg'
    }
  ];

  /* ================= 4. خيارات أسطح العمل (Countertops) ================= */
  var COUNTERTOPS = [
    {
      id: 'quartz-ivory',
      name: 'كوارتز عاجي ناعم',
      desc: 'سطح عملي غير مسامي مقاوم للبقع والخدوش اليومية',
      color: '#eae4d8',
      extra: 0
    },
    {
      id: 'porcelain-calacatta',
      name: 'بورسلان كالاكاتا بعروق دافئة',
      desc: 'مقاومة فائقة للحرارة والقطع مع مظهر رخامي فاخر',
      color: '#f5f2ec',
      extra: 2200
    },
    {
      id: 'graphite-stone',
      name: 'سطح حجري جرافيت داكن',
      desc: 'ملمس حجري مطفي يمنح تباينًا معماريًا أنيقًا مع الأخشاب',
      color: '#3f3d3a',
      extra: 1800
    }
  ];

  /* ================= 5. التجهيزات الداخلية الاختيارية (الكبينة المفتوحة) ================= */
  var ADDONS = [
    {
      id: 'drawer-org',
      name: 'طقم تقسيم الأدراج الخشبي',
      desc: 'فواصل خشبية منظمة للملاعق والسكاكين وأدوات التحضير',
      price: 950,
      img: 'assets/web/ai-i1-drawer-organizer.jpg'
    },
    {
      id: 'corner-magic',
      name: 'نظام ركن زاوية دوّار بطابقين',
      desc: 'سلال سحب معدنية لاستغلال الزاوية بالكامل للقدور والأواني',
      price: 1650,
      img: 'assets/web/ai-i2-corner-pullout.jpg'
    },
    {
      id: 'pantry-pull',
      name: 'عمود تموين بسحب كامل (Pantry)',
      desc: 'وحدة تخزين طولية بسلال متعددة تخرج بالكامل عند الفتح',
      price: 2400,
      img: 'assets/web/ai-i5-pantry-pullout.jpg'
    }
  ];

  /* ================= 6. الحالة الحالية للتجربة (State) ================= */
  var state = {
    unitId: 'unit-a',
    packageId: 'B',
    finishId: 'oak',
    topId: 'quartz-ivory',
    addons: ['drawer-org'],
    stageView: '3d', // '3d' or '2d'
    transport: 800
  };

  function formatSAR(num) {
    return Number(num).toLocaleString('en-US');
  }

  function getUnit() {
    return UNITS.find(function (u) { return u.id === state.unitId; }) || UNITS[0];
  }
  function getPkg() {
    return PACKAGES.find(function (p) { return p.id === state.packageId; }) || PACKAGES[0];
  }
  function getFinish() {
    return FINISHES.find(function (f) { return f.id === state.finishId; }) || FINISHES[0];
  }
  function getTop() {
    return COUNTERTOPS.find(function (t) { return t.id === state.topId; }) || COUNTERTOPS[0];
  }

  function calculateQuote() {
    var unit = getUnit();
    var pkg = getPkg();
    var fin = getFinish();
    var top = getTop();

    var scaledBase = Math.round((pkg.basePrice * unit.multiplier) / 100) * 100;
    var addonsTotal = 0;
    state.addons.forEach(function (aid) {
      var found = ADDONS.find(function (a) { return a.id === aid; });
      if (found) addonsTotal += found.price;
    });

    var equipment = scaledBase + fin.extra + top.extra + addonsTotal;
    var transport = state.transport;
    var subtotal = equipment + transport;
    var vat = Math.round(subtotal * 0.15);
    var total = subtotal + vat;

    return {
      scaledBase: scaledBase,
      finishExtra: fin.extra,
      topExtra: top.extra,
      addonsTotal: addonsTotal,
      equipment: equipment,
      transport: transport,
      vat: vat,
      total: total
    };
  }

  /* ================= 7. حفظ واستعادة الاختيارات من الرابط (#hash) ================= */
  function encodeStateToHash() {
    var params = new URLSearchParams();
    params.set('v', '2');
    params.set('u', state.unitId);
    params.set('p', state.packageId);
    params.set('f', state.finishId);
    params.set('t', state.topId);
    params.set('a', state.addons.join(','));
    return '#' + params.toString();
  }

  function restoreStateFromHash() {
    var h = window.location.hash;
    if (!h || h.indexOf('v=2') === -1) return false;
    try {
      var q = new URLSearchParams(h.replace(/^#/, ''));
      var u = q.get('u');
      var p = q.get('p');
      var f = q.get('f');
      var t = q.get('t');
      var a = q.get('a');
      if (UNITS.some(function (x) { return x.id === u; })) state.unitId = u;
      if (PACKAGES.some(function (x) { return x.id === p; })) state.packageId = p;
      if (FINISHES.some(function (x) { return x.id === f; })) state.finishId = f;
      if (COUNTERTOPS.some(function (x) { return x.id === t; })) state.topId = t;
      if (a !== null) {
        state.addons = a
          .split(',')
          .filter(function (id) { return ADDONS.some(function (ad) { return ad.id === id; }); });
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  /* ================= 8. رسم المخطط الهندسي العلوي التفاعلي (2D Floorplan SVG) ================= */
  function renderFloorplanSVG() {
    var container = document.querySelector('[data-role="floorplan-svg-box"]');
    if (!container) return;
    var unit = getUnit();
    var pkg = getPkg();
    var fin = getFinish();

    var extraL = pkg.id === 'B' || pkg.id === 'C'
      ? '<rect x="70" y="105" width="60" height="145" fill="' + fin.color + '" stroke="#44291c" stroke-width="2.5" rx="3"/>'
      : '';
    var extraOpposite = pkg.id === 'C'
      ? '<rect x="190" y="210" width="160" height="62" fill="' + fin.color + '" stroke="#44291c" stroke-width="2.5" rx="4"/>' +
        '<text x="270" y="246" fill="#fbf9f6" font-family="Cairo, sans-serif" font-size="12" font-weight="700" text-anchor="middle">جزيرة / وحدة مقابلة</text>'
      : '';

    container.innerHTML =
      '<svg viewBox="0 0 480 340" role="img" aria-label="مخطط علوي لتوزيع الباقة ' + pkg.id + ' في ' + unit.code + '" style="width:100%;max-width:460px;height:auto">' +
        '<rect x="65" y="40" width="330" height="250" fill="#fbf9f6" stroke="#44291c" stroke-width="5" rx="4"/>' +
        '<!-- جدار الخدمات الرئيسي -->' +
        '<rect x="70" y="45" width="320" height="60" fill="' + fin.color + '" stroke="#44291c" stroke-width="2.5" rx="3"/>' +
        extraL +
        extraOpposite +
        '<!-- الحوض -->' +
        '<rect x="140" y="55" width="56" height="38" rx="5" fill="#d9e2e5" stroke="#44291c" stroke-width="2"/>' +
        '<circle cx="168" cy="74" r="4" fill="#44291c"/>' +
        '<!-- الموقد -->' +
        '<rect x="270" y="55" width="58" height="40" rx="4" fill="#2e2d2b" stroke="#44291c" stroke-width="2"/>' +
        '<circle cx="285" cy="67" r="5" fill="none" stroke="#e2b880" stroke-width="1.6"/>' +
        '<circle cx="312" cy="67" r="5" fill="none" stroke="#e2b880" stroke-width="1.6"/>' +
        '<circle cx="285" cy="83" r="5" fill="none" stroke="#e2b880" stroke-width="1.6"/>' +
        '<circle cx="312" cy="83" r="5" fill="none" stroke="#e2b880" stroke-width="1.6"/>' +
        '<!-- فتحة المدخل -->' +
        '<path d="M300 290 h80" stroke="#fbf9f6" stroke-width="8"/>' +
        '<path d="M300 290 v-72 a72 72 0 0 1 72 72" fill="none" stroke="#8a5a25" stroke-width="2" stroke-dasharray="5 5"/>' +
        '<!-- نصوص المقاسات -->' +
        '<g fill="#44291c" font-family="Cairo, sans-serif" font-size="14" font-weight="700" text-anchor="middle">' +
          '<text x="230" y="25">طول جدار المطبخ: ' + unit.wallLength + '</text>' +
          '<text x="435" y="170">المساحة: ' + unit.area + '</text>' +
          '<text x="230" y="172" fill="#8a5a25" font-size="15">' + pkg.layout + ' — ' + unit.dims + '</text>' +
          '<text x="340" y="320" font-size="12" fill="#6b5a4e">مدخل المطبخ (90 سم)</text>' +
        '</g>' +
      '</svg>';
  }

  /* ================= 9. بناء وتحديث جميع عناصر الواجهة ================= */
  function initStageImages() {
    var stage = document.querySelector('[data-role="studio-photo-stage"]');
    if (!stage) return;
    var existing = stage.querySelectorAll('img[data-finish-img]');
    if (existing.length > 0) return;

    FINISHES.forEach(function (fin, idx) {
      var img = document.createElement('img');
      img.src = fin.img;
      img.alt = 'منظور مطبخ بتشطيب ' + fin.name + ' وهيكل PVC من إيوان';
      img.width = 1536;
      img.height = 1024;
      img.decoding = 'async';
      img.setAttribute('data-finish-img', fin.id);
      img.style.opacity = fin.id === state.finishId ? '1' : '0';
      img.style.zIndex = fin.id === state.finishId ? '2' : '1';
      if (idx > 0) img.loading = 'lazy';
      stage.insertBefore(img, stage.firstChild);
    });
  }

  function renderAll() {
    var unit = getUnit();
    var pkg = getPkg();
    var fin = getFinish();
    var top = getTop();
    var quote = calculateQuote();

    // 1. بطاقات نماذج الشقق
    var unitsGrid = document.querySelector('[data-role="units-grid"]');
    if (unitsGrid) {
      unitsGrid.innerHTML = UNITS.map(function (u) {
        var sel = u.id === state.unitId;
        var baseA = Math.round((PACKAGES[0].basePrice * u.multiplier) / 100) * 100;
        return (
          '<button type="button" class="unit-card ' + (sel ? 'is-selected' : '') + '" data-unit-select="' + u.id + '" aria-pressed="' + sel + '">' +
            '<div class="unit-badge">' +
              '<span>' + u.code + '</span>' +
              '<span class="unit-radio" aria-hidden="true"></span>' +
            '</div>' +
            '<h3 class="t-heading" style="color:var(--ink)">' + u.title + '</h3>' +
            '<p style="font-size:0.88rem;color:var(--ink-muted)">' + u.desc + '</p>' +
            '<div class="unit-metrics">' +
              '<span>الأبعاد: ' + u.dims + ' · المساحة: ' + u.area + '</span>' +
              '<span class="unit-price-pill">يبدأ من ' + formatSAR(baseA) + ' ر.س</span>' +
            '</div>' +
          '</button>'
        );
      }).join('');
    }

    // 2. بطاقات الباقات (A / B / C)
    var pkgsGrid = document.querySelector('[data-role="packages-grid"]');
    if (pkgsGrid) {
      pkgsGrid.innerHTML = PACKAGES.map(function (p) {
        var sel = p.id === state.packageId;
        var scaled = Math.round((p.basePrice * unit.multiplier) / 100) * 100;
        var feats = p.features.map(function (ft) { return '<li>' + ft + '</li>'; }).join('');
        return (
          '<button type="button" class="pkg-card ' + (sel ? 'is-selected' : '') + '" data-pkg-select="' + p.id + '" aria-pressed="' + sel + '">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px">' +
              '<span class="pkg-letter">' + p.id + '</span>' +
              '<span style="font:600 0.8rem/1.3 var(--font-sans);color:var(--bronze);background:var(--surface-sand);padding:5px 12px;border-radius:99px">' + p.badge + '</span>' +
            '</div>' +
            '<div>' +
              '<h3 class="t-md" style="font-size:1.3rem;color:var(--ink)">' + p.name + '</h3>' +
              '<p style="margin-top:4px;font:600 0.84rem/1.4 var(--font-sans);color:var(--bronze)">' + p.layout + ' · ' + unit.dims + '</p>' +
              '<p style="margin-top:6px;font-size:0.88rem;color:var(--ink-muted)">' + p.desc + '</p>' +
            '</div>' +
            '<ul class="pkg-features">' + feats + '</ul>' +
            '<div class="pkg-price-tag">' +
              '<span style="font-size:0.82rem;color:var(--ink-muted)">التجهيز الأساسي للوحدة</span>' +
              '<strong style="font:700 1.45rem/1.2 var(--font-display);color:var(--walnut)">' + formatSAR(scaled) + ' <small style="font-size:0.85rem;font-weight:500">ر.س</small></strong>' +
            '</div>' +
          '</button>'
        );
      }).join('');
    }

    // 3. تحديث صورة المطبخ النشطة (6 ألوان وتشطيبات)
    initStageImages();
    var stageImgs = document.querySelectorAll('img[data-finish-img]');
    stageImgs.forEach(function (img) {
      var isCurrent = img.getAttribute('data-finish-img') === state.finishId;
      img.style.opacity = isCurrent ? '1' : '0';
      img.style.zIndex = isCurrent ? '2' : '1';
      img.style.transform = isCurrent ? 'scale(1)' : 'scale(1.02)';
    });

    // شارات العرض فوق الصورة
    var badgeUnit = document.querySelector('[data-role="stage-badge-unit"]');
    var badgeFinish = document.querySelector('[data-role="stage-badge-finish"]');
    var badgePrice = document.querySelector('[data-role="stage-badge-price"]');
    if (badgeUnit) badgeUnit.textContent = unit.code + ' · باقة ' + pkg.id + ' (' + pkg.layout + ')';
    if (badgeFinish) badgeFinish.textContent = 'الواجهة: ' + fin.name + ' · السطح: ' + top.name;
    if (badgePrice) badgePrice.textContent = 'التقدير الحالي: ' + formatSAR(quote.total) + ' ر.س (شامل الضريبة)';

    // تحديث المخطط الهندسي العلوي
    renderFloorplanSVG();

    // 4. أزرار الألوان الستة للواجهات
    var finishesBox = document.querySelector('[data-role="finishes-grid"]');
    if (finishesBox) {
      finishesBox.innerHTML = FINISHES.map(function (f) {
        var act = f.id === state.finishId;
        return (
          '<button type="button" class="finish-option-btn ' + (act ? 'is-active' : '') + '" data-finish-select="' + f.id + '" aria-pressed="' + act + '">' +
            '<span class="finish-color-dot" style="background:' + f.color + '"></span>' +
            '<div style="min-width:0">' +
              '<div style="font:600 0.88rem/1.35 var(--font-sans);color:var(--ink)">' + f.name + '</div>' +
              '<div style="font:500 0.76rem/1.3 var(--font-sans);color:var(--bronze);margin-top:2px">' +
                (f.extra > 0 ? '+ ' + formatSAR(f.extra) + ' ر.س' : 'ضمن الباقة الأساسية') +
              '</div>' +
            '</div>' +
          '</button>'
        );
      }).join('');
    }
    var finishDescEl = document.querySelector('[data-role="active-finish-desc"]');
    if (finishDescEl) {
      finishDescEl.textContent = fin.name + ': ' + fin.desc;
    }

    // 5. أزرار أسطح العمل
    var topsBox = document.querySelector('[data-role="tops-grid"]');
    if (topsBox) {
      topsBox.innerHTML = COUNTERTOPS.map(function (t) {
        var act = t.id === state.topId;
        return (
          '<button type="button" class="finish-option-btn ' + (act ? 'is-active' : '') + '" data-top-select="' + t.id + '" aria-pressed="' + act + '" style="grid-column: span 2">' +
            '<span class="finish-color-dot" style="background:' + t.color + '"></span>' +
            '<div style="flex:1;min-width:0">' +
              '<div style="display:flex;justify-content:space-between;gap:8px;align-items:center">' +
                '<strong style="font:600 0.9rem/1.35 var(--font-sans);color:var(--ink)">' + t.name + '</strong>' +
                '<span style="font:600 0.78rem/1.3 var(--font-sans);color:var(--bronze)">' + (t.extra > 0 ? '+ ' + formatSAR(t.extra) + ' ر.س' : 'ضمن الباقة') + '</span>' +
              '</div>' +
              '<div style="font-size:0.78rem;color:var(--ink-muted);margin-top:2px">' + t.desc + '</div>' +
            '</div>' +
          '</button>'
        );
      }).join('');
    }

    // 6. التجهيزات الداخلية الاختيارية (الكبينة المفتوحة)
    var addonsBox = document.querySelector('[data-role="addons-list"]');
    if (addonsBox) {
      addonsBox.innerHTML = ADDONS.map(function (ad) {
        var checked = state.addons.indexOf(ad.id) !== -1;
        return (
          '<label class="addon-item ' + (checked ? 'is-checked' : '') + '">' +
            '<input type="checkbox" value="' + ad.id + '" data-addon-toggle="' + ad.id + '" ' + (checked ? 'checked' : '') + ' style="width:18px;height:18px;accent-color:var(--walnut);flex-shrink:0">' +
            '<img src="' + ad.img + '" alt="' + ad.name + '" width="56" height="56" loading="lazy" decoding="async" class="addon-thumb">' +
            '<div style="flex:1;min-width:0">' +
              '<div style="display:flex;justify-content:space-between;gap:8px;align-items:center">' +
                '<strong style="font:600 0.9rem/1.35 var(--font-sans);color:var(--ink)">' + ad.name + '</strong>' +
                '<span style="font:700 0.82rem/1.3 var(--font-sans);color:var(--bronze)">+ ' + formatSAR(ad.price) + ' ر.س</span>' +
              '</div>' +
              '<div style="font-size:0.78rem;color:var(--ink-muted);margin-top:2px">' + ad.desc + '</div>' +
            '</div>' +
          '</label>'
        );
      }).join('');
    }

    // 7. تحديث ملخص المواصفات وعرض السعر في القسم 04
    var sumUnit = document.querySelector('[data-role="sum-unit"]');
    var sumPkg = document.querySelector('[data-role="sum-pkg"]');
    var sumFinish = document.querySelector('[data-role="sum-finish"]');
    var sumTop = document.querySelector('[data-role="sum-top"]');
    var sumAddons = document.querySelector('[data-role="sum-addons"]');
    var sumWarranty = document.querySelector('[data-role="sum-warranty"]');

    if (sumUnit) sumUnit.textContent = unit.code + ' — ' + unit.title + ' (' + unit.dims + ' | ' + unit.area + ')';
    if (sumPkg) sumPkg.textContent = 'الباقة ' + pkg.id + ': ' + pkg.name + ' (' + pkg.layout + ')';
    if (sumFinish) sumFinish.textContent = fin.name + (fin.extra > 0 ? ' (+ ' + formatSAR(fin.extra) + ' ر.س)' : ' (ضمن الباقة)');
    if (sumTop) sumTop.textContent = top.name + (top.extra > 0 ? ' (+ ' + formatSAR(top.extra) + ' ر.س)' : ' (ضمن الباقة)');
    if (sumAddons) {
      if (state.addons.length === 0) {
        sumAddons.textContent = 'بدون إضافات تنظيم اختيارية';
      } else {
        sumAddons.textContent = state.addons.map(function (id) {
          var a = ADDONS.find(function (x) { return x.id === id; });
          return a ? a.name : '';
        }).join(' + ');
      }
    }
    if (sumWarranty) sumWarranty.textContent = pkg.warranty;

    // أرقام السعر التفصيلية
    var priceTotalEl = document.querySelector('[data-role="quote-total"]');
    var priceBaseEl = document.querySelector('[data-role="quote-base"]');
    var priceFinEl = document.querySelector('[data-role="quote-finish-top"]');
    var priceAddonsEl = document.querySelector('[data-role="quote-addons"]');
    var priceTransEl = document.querySelector('[data-role="quote-transport"]');
    var priceVatEl = document.querySelector('[data-role="quote-vat"]');

    if (priceTotalEl) priceTotalEl.textContent = formatSAR(quote.total);
    if (priceBaseEl) priceBaseEl.textContent = formatSAR(quote.scaledBase) + ' ر.س';
    if (priceFinEl) priceFinEl.textContent = formatSAR(quote.finishExtra + quote.topExtra) + ' ر.س';
    if (priceAddonsEl) priceAddonsEl.textContent = formatSAR(quote.addonsTotal) + ' ر.س';
    if (priceTransEl) priceTransEl.textContent = formatSAR(quote.transport) + ' ر.س';
    if (priceVatEl) priceVatEl.textContent = formatSAR(quote.vat) + ' ر.س';

    // شريط السعر السفلي الذكي للموبايل
    var mobTotalEl = document.querySelector('[data-role="mobile-bar-total"]');
    var mobSubEl = document.querySelector('[data-role="mobile-bar-sub"]');
    if (mobTotalEl) mobTotalEl.textContent = formatSAR(quote.total) + ' ر.س';
    if (mobSubEl) mobSubEl.textContent = unit.code + ' · باقة ' + pkg.id + ' · ' + fin.name;
  }

  /* ================= 10. ربط الأحداث التفاعلية ================= */
  function bindEvents() {
    document.addEventListener('click', function (e) {
      var unitBtn = e.target.closest('[data-unit-select]');
      if (unitBtn) {
        state.unitId = unitBtn.getAttribute('data-unit-select');
        renderAll();
        return;
      }

      var pkgBtn = e.target.closest('[data-pkg-select]');
      if (pkgBtn) {
        state.packageId = pkgBtn.getAttribute('data-pkg-select');
        renderAll();
        return;
      }

      var finBtn = e.target.closest('[data-finish-select]');
      if (finBtn) {
        state.finishId = finBtn.getAttribute('data-finish-select');
        renderAll();
        return;
      }

      var topBtn = e.target.closest('[data-top-select]');
      if (topBtn) {
        state.topId = topBtn.getAttribute('data-top-select');
        renderAll();
        return;
      }

      var viewBtn = e.target.closest('[data-stage-view]');
      if (viewBtn) {
        var v = viewBtn.getAttribute('data-stage-view');
        state.stageView = v;
        document.querySelectorAll('[data-stage-view]').forEach(function (b) {
          b.classList.toggle('is-active', b.getAttribute('data-stage-view') === v);
        });
        var photoStage = document.querySelector('[data-role="studio-photo-stage"]');
        var planStage = document.querySelector('[data-role="studio-plan-stage"]');
        if (photoStage && planStage) {
          photoStage.style.display = v === '3d' ? 'block' : 'none';
          planStage.classList.toggle('is-visible', v === '2d');
        }
        return;
      }

      // زر حفظ الرابط
      var saveBtn = e.target.closest('[data-role="save-config-btn"]');
      if (saveBtn) {
        var hash = encodeStateToHash();
        var fullUrl = window.location.origin + window.location.pathname + hash;
        window.history.replaceState(null, '', fullUrl);
        var box = document.querySelector('[data-role="saved-link-box"]');
        var input = document.querySelector('[data-role="saved-link-input"]');
        var msg = document.querySelector('[data-role="saved-link-msg"]');
        if (box && input) {
          box.style.display = 'block';
          input.value = fullUrl;
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(fullUrl).then(function () {
            if (msg) msg.textContent = '✓ تم حفظ ونسخ رابط اختياراتك إلى الحافظة! يمكنك الرجوع إليه في أي وقت أو مشاركته.';
          }).catch(function () {
            if (msg) msg.textContent = '✓ تم توليد رابط اختياراتك بالأسفل — يمكنك نسخه ومشاركته.';
          });
        } else if (msg) {
          msg.textContent = '✓ تم توليد رابط اختياراتك بالأسفل — يمكنك نسخه ومشاركته.';
        }
        return;
      }

      // زر إرسال الاختيارات كاملة عبر واتساب
      var waBtn = e.target.closest('[data-role="send-wa-quote"]');
      if (waBtn) {
        var unit = getUnit();
        var pkg = getPkg();
        var fin = getFinish();
        var top = getTop();
        var quote = calculateQuote();
        var hashUrl = window.location.origin + window.location.pathname + encodeStateToHash();
        var addonsNames = state.addons.length
          ? state.addons.map(function (id) {
              var a = ADDONS.find(function (x) { return x.id === id; });
              return a ? a.name : '';
            }).join(' + ')
          : 'بدون إضافات';

        var lines = [
          'مرحبًا فريق إيوان، أرغب في اعتماد ومراجعة اختيارات المطبخ التالية (عبر تجربة QR الوحدة السكنية):',
          '• نموذج الوحدة: ' + unit.code + ' (' + unit.dims + ' | ' + unit.area + ')',
          '• الباقة المختارة: الباقة ' + pkg.id + ' — ' + pkg.name + ' (' + pkg.layout + ')',
          '• لون وتشطيب الواجهات: ' + fin.name,
          '• سطح العمل: ' + top.name,
          '• التجهيزات الداخلية: ' + addonsNames,
          '• التقدير المبدئي (شامل الضريبة والتركيب): ' + formatSAR(quote.total) + ' ر.س',
          '• رابط اختياراتي المحفوظة: ' + hashUrl
        ];
        var waUrl = 'https://wa.me/966542178498?text=' + encodeURIComponent(lines.join('\n'));
        window.open(waUrl, '_blank', 'noopener');
        return;
      }

      // زر الطباعة
      var printBtn = e.target.closest('[data-role="print-quote-btn"]');
      if (printBtn) {
        window.print();
        return;
      }

      // أزرار التبديل السريع بين قسم المشتري وقسم المطور العقاري
      var modeBtn = e.target.closest('[data-mode-target]');
      if (modeBtn) {
        var targetSelector = modeBtn.getAttribute('data-mode-target');
        document.querySelectorAll('[data-mode-target]').forEach(function (b) {
          b.classList.toggle('is-active', b === modeBtn);
        });
        var targetEl = document.querySelector(targetSelector);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });

    document.addEventListener('change', function (e) {
      var addonInput = e.target.closest('[data-addon-toggle]');
      if (addonInput) {
        var id = addonInput.getAttribute('data-addon-toggle');
        if (addonInput.checked) {
          if (state.addons.indexOf(id) === -1) state.addons.push(id);
        } else {
          state.addons = state.addons.filter(function (x) { return x !== id; });
        }
        renderAll();
      }
    });
  }

  /* ================= 11. شريط التقدم والأنيميشن عند التمرير ================= */
  function initEffects() {
    var progressBar = document.querySelector('.scroll-progress');
    var header = document.querySelector('.site-header');
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (progressBar) {
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
        progressBar.style.width = pct + '%';
      }
      if (header) {
        header.classList.toggle('scrolled', scrollTop > 24);
      }
    }, { passive: true });

    var revealEls = document.querySelectorAll('.reveal, .reveal-mask');
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view', 'is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.01, rootMargin: '0px 0px -10px 0px' });
      revealEls.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.05) {
          el.classList.add('in-view', 'is-visible');
        } else {
          obs.observe(el);
        }
      });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in-view', 'is-visible'); });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var restored = restoreStateFromHash();
    renderAll();
    bindEvents();
    initEffects();
    if (restored) {
      var msg = document.querySelector('[data-role="restored-banner"]');
      if (msg) msg.style.display = 'block';
    }
  });
})();
