"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Wordle = /*#__PURE__*/function () {
  function Wordle() {
    _classCallCheck(this, Wordle);

    this.words = ["maşın", "qəzəl", "abidə", "absis", "abunə", "abxaz", "abzas", "acgöz", "aclıq", "acmaq", "adama", "adamı", "Adana", "addım", "adlıq", "adres", "Afina", "afişa", "Afyon", "ahəng", "aktiv", "akula", "albom", "alıcı", "Allah", "alman", "almaq", "almaz", "Almaz", "alqış", "altın", "altun", "alver", "alçaq", "anbar", "ancaq", "anket", "Anlam", "aprel", "aptek", "Aqaba", "araba", "aralı", "ardıc", "areal", "armud", "arsen", "artım", "artıq", "Aruba", "arvad", "arxiv", "Asiya", "aslan", "asmaq", "astar", "atlas", "atlaz", "atmaq", "avara", "axmaq", "axsaq", "axtar", "axşam", "Aydın", "aydın", "Ayova", "ayran", "azlıq", "azmaq", "azuqə", "azğın", "açmaq", "Ağdam", "Ağdaş", "aşağı", "aşkar", "aşmaq", "aşpaz", "Babək", "badam", "badya", "bakal", "balet", "balıq", "balış", "balta", "banan", "banka", "barıt", "baxış", "bazar", "Bazel", "bağlı", "başqa", "başçı", "Beliz", "Benin", "beyin", "beşik", "bibər", "bilet", "bilgi", "bilik", "bilim", "bilək", "binom", "biraz", "birgə", "birja", "Bitik", "bitki", "biyan", "bizon", "bıçaq", "biçin", "boran", "boyun", "boğaz", "bucaq", "budaq", "bufet", "buket", "bulaq", "bulud", "Bursa", "burun", "Butan", "buxaq", "buxar", "buxta", "buzov", "buğda", "buğum", "böcək", "bölgü", "bölgə", "bölmə", "bölən", "böyük", "böyür", "büdcə", "bükük", "büküm", "bürkü", "bütöv", "bütün", "bəbir", "bəbək", "bədii", "bədən", "bəhrə", "bəlim", "bəlkə", "bəniz", "bənna", "Bərdə", "bəsit", "bəzək", "bəzən", "bəşər", "cahil", "calaq", "camış", "canlı", "casus", "cavab", "cavan", "Cavid", "cehiz", "ciddi", "cihaz", "cilov", "cinsi", "cisim", "cizgi", "corab", "Culfa", "cümlə", "cüyür", "cəftə", "cəhət", "cənab", "cənub", "cərgə", "cəsur", "daban", "dadlı", "daimi", "dairə", "dalan", "dalaq", "dalğa", "damaq", "damar", "damcı", "damğa", "daraq", "daxma", "dayaq", "dayaz", "dayça", "demək", "deyil", "deşik", "digər", "dilim", "dilək", "dirək", "divan", "divar", "diyar", "Dnepr", "dodaq", "dolma", "dolça", "donuz", "doğma", "doğru", "doğum", "doğuş", "Dubay", "duman", "Dunay", "durna", "duyğu", "duzlu", "döngə", "döymə", "döyüş", "döşək", "dükan", "dünya", "dünən", "düymə", "düyüm", "düyün", "Düzcə", "Dəclə", "dəcəl", "dəlik", "dəmir", "dəniz", "dəqiq", "dərin", "dərzi", "dəstə", "dəvət", "dəyər", "ehram", "eninə", "enmək", "ensiz", "erkək", "eskiz", "eston", "etmək", "eyham", "eyvan", "eşmək", "eşşək", "faciə", "fasad", "fidan", "fikir", "filiz", "fincə", "firqə", "fırça", "fitrə", "forma", "forum", "fəhlə", "fəqət", "Fərat", "fərdi", "fərəh", "fəsil", "gediş", "geniş", "geyim", "gilas", "giliz", "girdə", "giriş", "girov", "gizli", "gopçu", "göbək", "gödək", "gördü", "görür", "görüş", "gövdə", "göyəm", "gözəl", "gübrə", "güclü", "güllü", "güllə", "gülüş", "güləş", "güman", "gümüş", "günah", "günəş", "Günəş", "güzgü", "gəlin", "gəlir", "Gəncə", "gərək", "Haaqa", "Haiti", "hakim", "halqa", "halva", "hamam", "hamar", "hasar", "hasil", "Hatay", "Havay", "Hayfa", "hazır", "hesab", "heyva", "heyət", "hissə", "hiylə", "Hovur", "hovuz", "höcət", "hörük", "hövzə", "hücum", "hüdud", "hünər", "hədəf", "həftə", "həkim", "həlim", "Hələb", "həmən", "həris", "həsir", "həsəd", "Həsən", "hətta", "həvəs", "həyat", "həyət", "həzin", "ibarə", "iblis", "icarə", "icazə", "iclas", "icmal", "idarə", "idbar", "iddia", "ideya", "idman", "idrak", "ifadə", "ifaçı", "iflic", "ilahi", "ilbiz", "ilgək", "illik", "imkan", "incik", "innab", "insaf", "insan", "iqbal", "iqlim", "iradə", "islah", "ispan", "istək", "itkin", "izzət", "içdik", "içdim", "içdin", "içmək", "içəri", "işarə", "işğal", "jilet", "kabab", "kabel", "kafir", "kahin", "kakao", "kamal", "Kamal", "kaman", "kamil", "kanal", "kanon", "kasıb", "kassa", "katet", "kağız", "kefli", "keçid", "keşik", "kifir", "kilid", "Kilis", "kilsə", "kimsə", "kimya", "kirpi", "kitab", "Kiyev", "kiçik", "kloun", "koala", "kobud", "kokos", "Konya", "kubok", "kukla", "kulon", "köhnə", "kölgə", "kömür", "kömək", "könül", "Könül", "köpük", "köpək", "körpü", "körpə", "kötük", "köçmə", "küftə", "külli", "külək", "kündə", "kürək", "kürən", "kütlə", "küçük", "kədər", "kəllə", "kələm", "kələz", "kəmər", "kənar", "Kərki", "kətan", "kəvər", "labüd", "lakin", "lampa", "lavaş", "layiq", "lazım", "Laçın", "Lerik", "lider", "Liman", "liman", "limon", "linza", "Litva", "Livan", "lobya", "lovğa", "lövhə", "lüğət", "ləhcə", "lələk", "lənət", "ləpir", "ləzgi", "ləçək", "macar", "maddi", "maddə", "mahir", "mahnı", "Malta", "mamır", "manat", "maneə", "manqo", "maral", "matah", "matəm", "mayak", "medal", "memar", "menyu", "metal", "metro", "meyar", "meyil", "meyvə", "milad", "minik", "Minsk", "Misir", "misra", "mixək", "mişar", "moruq", "Murad", "murad", "muzey", "Muğla", "möhür", "mömin", "mövqe", "mövzu", "müftə", "mühit", "mühüm", "müjdə", "mülki", "məcmu", "məcra", "mədən", "məgər", "məkan", "Məkkə", "məlum", "mələk", "mələz", "məmur", "mənbə", "mənşə", "məqam", "mərmi", "məxfi", "məyus", "məzun", "məşəl", "nadir", "Nadir", "nahaq", "nahar", "namaz", "namus", "naqil", "nasos", "Nauru", "naxış", "nazik", "nazir", "nazlı", "nağıl", "Nepal", "Niger", "nişan", "noxud", "nökər", "nömrə", "nöqtə", "növbə", "nüsxə", "nəfis", "nəfər", "nəfəs", "nəsil", "nəsnə", "nəzər", "nəğmə", "obraz", "Ohayo", "okean", "olmaq", "on üç", "onlar", "opera", "Osman", "otlaq", "otluq", "oxlov", "oxucu", "oxudu", "oxşar", "oynaq", "oğlan", "oğraş", "palıd", "palto", "Pamir", "panda", "panno", "papaq", "parad", "Paris", "parça", "paxla", "payız", "penis", "peyin", "piano", "pillə", "pilot", "pipik", "pitsa", "pişik", "polad", "polis", "Polşa", "Portu", "pozan", "Praqa", "püstə", "püxtə", "pəncə", "pərdə", "pətək", "qaban", "qabaq", "qabar", "qabil", "qabıq", "Qabon", "qadın", "qalay", "qalib", "Qalib", "qalın", "qaloş", "qamış", "qamçı", "qanad", "qanun", "qapaq", "qarın", "qarış", "qarlı", "qarğa", "qarşı", "qarət", "qatar", "qatil", "qatıq", "qatır", "qaval", "qayda", "qayın", "qayıq", "qayış", "qayka", "qayçı", "qayğı", "qazan", "Qazax", "qaçış", "qaşıq", "qeyri", "qıfıl", "qıraq", "qırıq", "qırış", "qırov", "qırğı", "qisas", "qisim", "qızıl", "Qızıl", "qohum", "Qomel", "qonaq", "qonur", "qonşu", "qoruq", "qorxu", "qovaq", "qovun", "qoyun", "qoçaq", "qoşqu", "qoşun", "quduz", "qulan", "qulaq", "Quran", "quraq", "qurma", "qurğu", "Qusar", "qutan", "qönçə", "qübbə", "qüllə", "qürub", "qüssə", "qüsur", "qüvvə", "qəbir", "qəbul", "qədim", "qədəh", "qədər", "qəfəs", "qəhvə", "qəlpə", "qələm", "qəmli", "qəpik", "qərar", "qərəz", "Qətər", "qəzet", "Qəzzə", "qəzəb", "raket", "rayon", "rezin", "roman", "rusca", "rütbə", "rəndə", "rəqib", "rəqəm", "rəsmi", "rəzil", "sabah", "sabit", "sabun", "sadiq", "sahib", "sahil", "sakin", "sakit", "salam", "saman", "sambo", "Samoa", "samur", "Samux", "saray", "sarğı", "savad", "saxta", "sayıq", "sayğı", "saziş", "saçaq", "sevgi", "seçki", "sıfır", "sifət", "silah", "simic", "sınaq", "sinif", "sınıq", "sinir", "Sinop", "sinus", "sirkə", "sirli", "sırğa", "Sivas", "sivil", "siçan", "sığal", "sonra", "sorğu", "soyuq", "soğan", "subay", "Sudan", "suiti", "sumaq", "Surra", "surət", "söyüd", "söyüş", "sübut", "süfrə", "süjet", "sükan", "sükut", "sümük", "süngü", "Sürix", "süsən", "Süsən", "sütun", "süxur", "səbir", "səbəb", "səbət", "səfir", "səfər", "səhra", "səhər", "sənəd", "sənət", "sərgi", "sərin", "sərçə", "səsli", "sətir", "tablo", "tabut", "taksi", "talan", "tanış", "tanrı", "tarif", "tarix", "tarla", "tatar", "tavan", "taxıl", "taxta", "teatr", "Texas", "tibbi", "tikan", "tilov", "tiraj", "titul", "tıxac", "Tokat", "Tokio", "tomat", "Tonqa", "toplu", "topuq", "toqqa", "torba", "Tovuz", "toxum", "toyuq", "tufan", "tumar", "tunel", "Tunis", "turac", "Turku", "turşu", "tutum", "tövbə", "tövlə", "tülkü", "türbə", "tüstü", "tütün", "təbii", "təbil", "təkan", "təkər", "təlim", "tələb", "təmir", "təmiz", "təməl", "tənha", "tənək", "təpik", "tərif", "tərəf", "təsir", "tətik", "tətil", "təyin", "təzad", "udlaq", "udmaq", "ulduz", "uyğun", "uçmaq", "uçqun", "vacib", "vahid", "valeh", "Valeh", "vaqon", "varis", "varlı", "Varna", "vaşaq", "vedrə", "vergi", "villa", "viola", "virus", "Volqa", "vurma", "vurğu", "Vyana", "vücud", "və ya", "vəhşi", "vəkil", "vələs", "vərəq", "vətən", "xadim", "xahiş", "xalis", "xalta", "xalça", "xeyir", "xeyli", "xilas", "xırda", "xitab", "xiyar", "xorda", "xoruz", "Xudat", "xurma", "xörək", "xütbə", "xəbər", "xələf", "xəmir", "xərac", "xərək", "xəsis", "xəstə", "xətər", "xəyal", "xəzəl", "ya da", "yalan", "yamac", "yaman", "yamaq", "yanaq", "yapon", "yaqut", "yastı", "yataq", "yatdı", "yavaş", "yaxın", "yaxud", "yaxşı", "yaylı", "yazıq", "yağış", "yağlı", "yaşıl", "yaşlı", "yeddi", "yedək", "yekun", "yemiş", "yemək", "yenot", "yerli", "yetim", "yetər", "yeznə", "yeşik", "yolka", "yolçu", "yonca", "yosun", "yoxsa", "yoğun", "yubka", "yulaf", "yumaq", "yumru", "yunan", "yüyən", "yəhər", "Yəmən", "zabil", "zabit", "zahid", "zahir", "zaiqə", "zakir", "zalım", "zalom", "zalxa", "zaman", "zavod", "zaçot", "zağar", "zağca", "zağlı", "zağçı", "zibil", "zirvə", "ziyan", "zolaq", "zorba", "zoğal", "zökəm", "zəfər", "zəhər", "zənci", "zərbə", "zərif", "zərrə", "zərər", "çadır", "çadra", "çalma", "çanaq", "çanta", "çapıq", "çavuş", "çaxır", "çayır", "çevik", "çevrə", "çexcə", "çeşid", "çeşmə", "çiban", "çinar", "çincə", "çıraq", "çırpı", "çıxış", "çiyin", "çiçək", "çoban", "çomaq", "Çorum", "çoxlu", "çubuq", "çuval", "çuxur", "çökək", "çömçə", "çörək", "çünki", "çürük", "çəkic", "çəkmə", "çəmən", "çəpiş", "çəpər", "çərəz", "çətin", "çətir", "ödəmə", "ölmək", "ölməz", "öpmək", "ördək", "Örnək", "örpək", "ötmək", "övlad", "öymək", "özbək", "üfüqi", "ülgüc", "ümumi", "ünvan", "üslub", "üstün", "üsyan", "üzgəc", "üzmək", "üzücü", "İdlib", "İrbid", "İslam", "İsveç", "İzmir", "İğdır", "şahid", "şanlı", "şapka", "şaqul", "şaxta", "şikar", "şimal", "şırım", "şirin", "şitil", "şlanq", "şorba", "şurup", "şübhə", "şüyüd", "şəfəq", "şəhid", "şəhər", "şəkil", "şəkər", "şənbə", "şərab", "şərti", "Şərur", "şərəf", "şəxsi", "əbədi", "əcdad", "ədyal", "əhali", "əhatə", "əhval", "əkmək", "əlaqə", "əlavə", "əlcək", "əlvan", "əmlak", "Əmman", "əmmək", "əmsal", "əncir", "ənənə", "əqidə", "əqrəb", "ərazi", "ərizə", "ərzaq", "əsgər", "əskik", "əsmək", "əsmər", "ətraf", "əvvəl", "əxlaq", "əyani", "əyləc", "əymək", "əzgil", "əzmək", "əzələ", "əğyar"];
    this.word = this.toLocaleUpperCase(this.words[Math.floor(Math.random() * this.words.length)]);
    this.grid = [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]];
    this.keyboard = [["Q", "Ü", "E", "R", "T", "Y", "U", "İ", "O", "P", "Ö", "Ğ", "0"], ["0", "A", "S", "D", "F", "G", "H", "J", "K", "L", "I", "Ə", "0"], ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Ç", "Ş", "del", "0", "0"]];
    this.letterEnd = [[], [], [], [], [], []];
    this.gridElement = document.querySelector(".grid");
    this.keyboardElement = document.querySelector(".keyboard");
    this.success = ["", "", "", "", ""];
    this.keyBoardMarked = [];
    this.row = 0;
    this.col = -1;
    this.complete = [false, false, false, false, false, false];
    this.entered = [false, false, false, false, false, false];
    this.inputWord = "";
    this.gameState = "not-completed";
  }

  _createClass(Wordle, [{
    key: "toLocaleUpperCase",
    value: function toLocaleUpperCase(s) {
      return s.toLocaleUpperCase();
    }
  }, {
    key: "drawGrid",
    value: function drawGrid(row, col) {
      this.gridElement.innerHTML = "";
      var delay = 0,
          delayValue = 0.1;

      for (var i = 0; i < 6; i++) {
        delay = 0;

        for (var j = 0; j < 5; j++) {
          var e = document.createElement("div");
          e.textContent = this.grid[i][j];
          e.className = "cell";

          if (row === i && col === j) {
            e.classList.add("active");
          } else {
            delay += delayValue;
            e.style.animationDelay = "".concat(delay, "s");
            e.style.transitionDelay = "".concat(delay, "s");
          }

          if (this.letterEnd[i][j] === "green") {
            e.classList.add("green");
            if (this.entered[i] === false) e.classList.add("anim");else e.classList.remove("anim");
          }

          if (this.letterEnd[i][j] === "yellow") {
            e.classList.add("yellow");
            if (this.entered[i] === false) e.classList.add("anim");else e.classList.remove("anim");
          }

          if (this.letterEnd[i][j] === "gray") {
            e.classList.add("gray");
            if (this.entered[i] === false) e.classList.add("anim");else e.classList.remove("anim");
          }

          this.gridElement.appendChild(e);
        }
      }
    }
  }, {
    key: "updateKeyBoardEvent",
    value: function updateKeyBoardEvent() {
      var keys = document.querySelectorAll(".key");
      var cells = document.querySelectorAll(".cell");
      keys.forEach(function (key) {
        key.addEventListener("click", function (e) {
          cells.forEach(function (cell) {
            cell.classList.remove("active");
          });
          wordle.keyDown(e, cells);
        });
      });
    }
  }, {
    key: "drawKeyboard",
    value: function drawKeyboard() {
      var _this = this;

      this.keyboardElement.innerHTML = "";

      for (var i = 0; i < 3; i++) {
        var row = document.createElement("div");
        row.className = "row";

        for (var j = 0; j < 13; j++) {
          if (this.keyboard[i][j] != "0") {
            (function () {
              var e = document.createElement("div");
              e.innerHTML = _this.keyboard[i][j];
              e.classList.add("key");
              var _keyBoardMarked = false,
                  color = void 0;

              for (var k = 0; k < _this.keyBoardMarked.length; k++) {
                if (_this.keyBoardMarked[k][1] === e.innerHTML) {
                  color = _this.keyBoardMarked[k][0];
                  if (_this.keyBoardMarked[k][0] != "green" && _this.word.indexOf(e.innerHTML) === _this.inputWord.indexOf(e.innerHTML) && _this.word.indexOf(e.innerHTML) != -1 && _this.inputWord.indexOf(e.innerHTML) != -1) color = "green";
                  _keyBoardMarked = true;
                  break;
                }
              }

              if (_keyBoardMarked) {
                e.classList.add(color);
              } else {
                for (var _k = 0; _k < 5; _k++) {
                  if (_this.inputWord[_k] === e.innerHTML) {
                    var c = void 0;

                    if (_this.success[_k] === "green") {
                      setTimeout(function () {
                        e.classList.add("green");
                      }, 300);
                      c = "green";
                    }

                    if (_this.success[_k] === "yellow") {
                      setTimeout(function () {
                        e.classList.add("yellow");
                      }, 300);
                      c = "yellow";
                    }

                    if (_this.success[_k] === "gray") {
                      setTimeout(function () {
                        e.classList.add("gray");
                      }, 300);
                      c = "gray";
                    }

                    _this.keyBoardMarked.push([c, e.innerHTML]);
                  }
                }
              }

              if (_this.keyboard[i][j] === "del") {
                e.innerHTML = "<i class='fas fa-backspace'></i>";
                e.id = "delete";
              }

              row.appendChild(e);
            })();
          }
        }

        this.keyboardElement.appendChild(row);
      }

      this.updateKeyBoardEvent();
    }
  }, {
    key: "deleteLetter",
    value: function deleteLetter(id) {
      if (id === "delete" && this.col >= 0) {
        this.complete[this.row] = false;
        this.grid[this.row][this.col] = "";
        this.col--;
        this.drawGrid(this.row, this.col);
      }
    }
  }, {
    key: "alertMessage",
    value: function alertMessage(msg, endless) {
      var box = document.querySelector(".alert-box");

      if (box.childNodes.length === 0) {
        var e = document.createElement("div");
        e.textContent = msg;
        e.className = "alert";
        box.appendChild(e);

        if (endless) {
          setTimeout(function () {
            e.remove();
          }, 3000);
        }
      }
    }
  }, {
    key: "checkLetters",
    value: function checkLetters() {
      var inputWord = this.grid[this.row].join("");
      inputWord = inputWord.toLocaleUpperCase();
      var words = this.words.map(function (word) {
        return word.toLocaleUpperCase();
      });

      if (words.indexOf(inputWord) === -1) {
        this.alertMessage("Söz Siyahısında Yoxdur", true);
      } else {
        for (var i = 0; i < 5; i++) {
          for (var j = i; j < 5; j++) {
            if (i === j && this.word[i] === inputWord[j]) {
              this.letterEnd[this.row][j] = "green";
              this.success[j] = "green";
              this["break"];
            } else if (this.word.indexOf(inputWord[j]) != -1) {
              this.letterEnd[this.row][j] = "yellow";
              this.success[j] = "yellow";
              break;
            } else if (this.word[i] != inputWord[j]) {
              this.letterEnd[this.row][j] = "gray";
              this.success[j] = "gray";
              break;
            }
          }
        }

        var success = true;

        for (var _i = 0; _i < 5; _i++) {
          if (this.letterEnd[this.row][_i] != "green") success = false;
        }

        if (success === true) {
          this.gameState = "success";
          this.alertMessage("Dahi", false);
          this.keyboardElement.classList.add("disable");
        }

        if (this.row < 5) {
          this.row++;
          this.col = -1;
        } else {
          this.gameState = "fail";
          this.alertMessage(this.word, false);
        }

        this.inputWord = inputWord.toLocaleUpperCase();
        this.drawKeyboard();
        this.drawGrid(this.row, this.col);
        this.entered[this.row - 1] = true;
      }
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      var input = e.target.innerHTML;
      var id = e.target.id;

      if (id != "delete" && input != "Enter" && !this.complete[this.row]) {
        if (this.col < 5) {
          if (this.col < 4) this.col++;
          this.grid[this.row][this.col] = input;
          this.drawGrid(this.row, this.col);
          if (this.col == 4) this.complete[this.row] = true;
        }
      } else {
        this.deleteLetter(id);

        if (input === "Enter") {
          if (this.grid[this.row][4] === "") {
            this.alertMessage("Kifayət Qədər Hərf Yoxdur", true);
          } else {
            this.checkLetters();
          }
        }
      }
    }
  }, {
    key: "closeButton",
    value: function closeButton() {
      var close = document.querySelector(".close");
      close.addEventListener("click", function (e) {
        close.parentElement.classList.toggle("disable");
      });
    }
  }, {
    key: "infoButton",
    value: function infoButton() {
      var info = document.querySelector(".info");
      var how = document.querySelector(".how");
      info.addEventListener("focus", function (e) {
        how.classList.toggle("disable");
      });
    }
  }]);

  return Wordle;
}();