/* =============================================================================
   IPAG HANDBOOK — CONTENT FILE (v7 — Cấu trúc 9 module)
   =============================================================================

   File chứa TOÀN BỘ NỘI DUNG hiển thị trong handbook.
   Mọi text, link, ảnh, file đính kèm — đều cập nhật ở đây.

   --- MỤC LỤC ---
   PHẦN 1: CẤU HÌNH TỔNG       (Danh sách SBU, Menu, Text giao diện, Welcome)
   PHẦN 2: NỘI DUNG MODULE CHUNG (Áp dụng cho mọi SBU)
   PHẦN 3: NỘI DUNG MODULE THEO SBU (Đào tạo — khác giữa các SBU)
   PHẦN 4: TIPS / MẸO THEO MODULE

   --- QUY TẮC SỬA ---
   - Text trong dấu nháy kép "..."
   - Mỗi dòng kết thúc bằng dấu phẩy , (trừ dòng cuối khối {} hoặc [])
   - Ảnh: "images/[sbu]/ten-anh.png"
   - File: "files/[sbu]/ten-file.pdf"
   - HTML cơ bản dùng được trong text: <strong>, <em>, <br>, <a>
   ============================================================================= */


/* =============================================================================
   PHẦN 1: CẤU HÌNH TỔNG
   ============================================================================= */

// --- 1.1. DANH SÁCH SBU ---
// Hiện tại chỉ kích hoạt IPAG. Các SBU khác tạm ẩn (comment //).
// Khi sẵn sàng, xoá // ở đầu dòng để bật lại.
const sbus = {
  IPAG:  { tenDayDu: "IPAG", khoiMacDinh: "backOffice",  khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "." } },
  VNDS:  { tenDayDu: "VNDIRECT",       khoi: { kinhDoanh: "Đội ngũ Kinh doanh", backOffice: "Đội ngũ chuyên môn, nghiệp vụ, share service" } },
  PTI:   { tenDayDu: "PTI",            khoi: { kinhDoanh: "Đội ngũ Kinh doanh", backOffice: "Đội ngũ chuyên môn, nghiệp vụ, share service" } },
  //IPAM:  { tenDayDu: "IPAM",           khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "Khối Back office" } },
  IPAS: { tenDayDu: "IPAS", khoiMacDinh: "backOffice", khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "." } },
  ANVIE: { tenDayDu: "ANVIE", khoiMacDinh: "vanHanh", khoi: { kinhDoanh: "Đơn vị Kinh doanh", sanXuat: "Khối Sản xuất", vanHanh: "." } }
};

// --- 1.2. CẤU TRÚC MENU SIDEBAR ---
// Đổi thứ tự / đổi tên / thêm module mới ngay tại đây.
const menuConfig = [
  {
    // Nhóm KHÔNG tiêu đề (nhom=null) → sidebar chỉ hiện 1 mục, không dòng header thừa.
    nhom: null,
    cacMuc: [
      { id: "dan-nhap",       ten: "Dẫn nhập",              icon: "book-marked" }
    ]
  },
  {
    nhom: "Hiểu IPAG",
    cacMuc: [
      { id: "con-nguoi-ipa",  ten: "Con người IPA",         icon: "heart-handshake" },
      { id: "ipag-la-ai",     ten: "IPAG là ai?",          icon: "compass" },
      // { id: "epic",           ten: "Văn hoá quản trị EPIC", icon: "sparkles" },  // TẠM ẨN 08/2026 — nội dung đã hợp nhất vào "IPAG là ai" (6 nhịp). Bỏ comment để bật lại.
      { id: "vai-tro",        ten: "Vai trò của bạn",       icon: "user-cog" }
    ]
  },
  {
    nhom: "Hành trình hội nhập",
    cacMuc: [
      { id: "lo-trinh",       ten: "Lộ trình 60 ngày",     icon: "map" },
      { id: "dao-tao",        ten: "Chương trình đào tạo", icon: "graduation-cap" },
      { id: "quy-dinh",       ten: "Quy định nhân sự",     icon: "shield-check" }
    ]
  },
  {
    nhom: "Hỗ trợ & Tham khảo",
    cacMuc: [
      { id: "nguon-luc",      ten: "Mạng lưới đồng hành",  icon: "users" },
      { id: "glossary",       ten: "Từ điển thuật ngữ",    icon: "book-open" },
      { id: "faq",            ten: "FAQ - Hỏi đáp",        icon: "help-circle" }
    ]
  }
];

// --- 1.3. TEXT GIAO DIỆN (UI Text) ---
// Mọi nhãn nút, chữ phụ trên giao diện — tách hết khỏi index.html.
const uiText = {
  appName:           "IPAG Handbook",
  appLogo:           "layout-dashboard",
  appLogoImg:        "images/chung/logo-ipa-group.png",   // Logo dùng ở welcome + sidebar (fallback: icon appLogo khi ảnh không tải được)
  sidebarToggleAria: "Đóng/mở menu",
  sidebarToggleClose:  "Đóng menu",
  sidebarToggleOpen:   "Mở menu",
  // Welcome screen
  obStep1Title:      "Bạn thuộc SBU nào?",
  obStep2Title:      "Bạn thuộc đội ngũ nào trong",
  obBackButton:      "Quay lại chọn đơn vị",
  // Header
  headerContextLabel:"Bạn đang xem:",
  headerChangeBtn:   "Quay lại trang chủ",
  // Module common
  tipButton:         "Tip / Mẹo",
  emptyTitle:        "Module đang phát triển",
  emptyDesc:         "Nội dung cho phần này đang được hoàn thiện và sẽ sớm ra mắt.",
  // Modal
  modalCloseBtn:     "Đóng",
  zoomCloseBtn:      "Đóng",
  zoomInBtn:         "Phóng to",
  zoomOutBtn:        "Thu nhỏ",
  zoomResetBtn:      "Khôi phục",
  // Module: Đào tạo
  daoTaoCompanyHeader: "Company Onboarding",
  daoTaoJobHeader:     "Job Onboarding",
  daoTaoEmptyJob:      "Nội dung Job Onboarding đang được cập nhật cho vị trí của bạn.",
  daoTaoCourseBtn:     "Tới lớp học LMS",
  daoTaoTagRequired:   "Bắt buộc",
  daoTaoTagOptional:   "Tham khảo",
  // Module: Glossary
  glossarySearchPlaceholder: "Nhập từ viết tắt để tra cứu (vd: FD, ICM, POA...)",
  // Module: FAQ
  faqSearchPlaceholder: "Nhập từ khoá để tìm câu hỏi...",
  faqNoResult:          "Không tìm thấy câu hỏi nào phù hợp.",
  // Module: EPIC
  epicCardCaption:   "Bấm vào ảnh để xem bản đầy đủ (phóng to / thu nhỏ trực tiếp bằng thao tác chạm hoặc cuộn chuột).",
  epicPdfFullscreen: "Xem ảnh đầy đủ"
};

// --- 1.4. NỘI DUNG WELCOME SCREEN ---
const welcomeContent = {
  brand: "IPAG GROUP",
  tieuDe: "Chào mừng đến với<br><span>IPA Group!</span>",
  // Đoạn lời chào (đoạn đầu)
  loiChao: "Chào bạn — người bạn mới của IPA Group.<br><br>Có những nơi người ta đến để làm việc, rồi rời đi khi hết giờ. Nhưng cũng có những nơi người ta đến để tìm thấy niềm vui, cảm hứng và được sống trọn vẹn hơn mỗi ngày. Chúng tôi mong IPA Group sẽ là nơi thứ hai ấy với bạn — một ngôi nhà được kiến tạo qua gần 30 năm, không chỉ để trở thành một tập đoàn lớn mạnh hơn, mà để trở thành một tổ chức làm nghề chuẩn mực, vượt trội và được gìn giữ qua nhiều thế hệ.<br><br>Từ hôm nay, bạn được trao truyền một gia tài trí tuệ — kết tinh từ kinh nghiệm, tri thức và tâm huyết mà nhiều thế hệ người đi trước đã dành cả hành trình của mình để gây dựng.<br><br>Trong ngôi nhà IPAG có Tam Bảo để nuôi dưỡng bạn, có Nền để bạn tựa vào, có Nếp để bạn sống mỗi ngày. Tất cả là để giúp bạn sống trọn tinh thần Sống nghề · Phụng sự — và từng bước tìm ra con đường sự nghiệp của riêng mình.",
  // Đoạn mô tả handbook — gộp đoạn 2 và 3 từ spec
  moTa: "Cuốn sổ tay hội nhập này sẽ kể cho bạn nghe câu chuyện về ngôi nhà IPAG, về sứ mệnh mà chúng ta cùng nhau thực hiện — và về gia tài mà từ hôm nay, bạn vừa là người được thừa hưởng, vừa là người tiếp tục gửi trao.<br><br>Hãy đọc thật thong thả. Bởi những điều quan trọng nhất ở IPAG không chỉ nằm trong quy trình, mà còn ở cách IPA Group nhìn về con người, về giá trị và về hành trình dài phía trước.",
  // Câu footer
  huongDan: "Hệ sinh thái Wellbeing Việt Nam · Vận hành theo mô hình Ngân hàng Năng lực",
  // Box Thư Chủ tịch trên welcome screen.
  // Thay thư mới: export ảnh mới vào images/chung/, cập nhật đường dẫn trong `anh`.
  // Muốn ẩn box: đổi hienThi thành false.
  thuChuTich: {
    hienThi: true,
    tieuDe: "Thư từ Chủ tịch gửi người bạn mới của IPA Group",
    moTa: "Trước khi bắt đầu, hãy dành ít phút đọc bức thư Chủ tịch Vũ Hiền gửi người bạn mới.",
    nutMo: "Đọc thư",
    ghiChu: "Bấm vào ảnh để mở bản đầy đủ (phóng to / thu nhỏ trực tiếp).",
    anh: [
      "images/chung/thu-chu-tich.png"
    ]
  }
};


/* =============================================================================
   PHẦN 2: NỘI DUNG MODULE CHUNG
   ============================================================================= */

// --- 2.1. MODULE: IPAG LÀ AI? — NHỊP ĐẾM IPAG ---
// Cấu trúc mới (07/2026): 6 nhịp Một → Sáu. Mỗi nhịp là 1 accordion.
// Field tuỳ chọn cho mỗi nhịp: ipagWay (grid 4 chữ) / hangTang (grid card) /
// nhomNen (nhóm card có tiêu đề riêng) / ketLuan (câu chốt dạng quote).
const iPAGContent = {
  tieuDe: "IPAG là ai?",
  moTa: "Ngày đầu bước vào một tổ chức mới, điều bạn cần nhất không phải là biết mình ngồi ở đâu, báo cáo cho ai, hay dùng hệ thống nào. Điều quan trọng hơn là hiểu: mình đang bước vào một ngôi nhà như thế nào, ngôi nhà ấy tin vào điều gì, và mình sẽ lớn lên cùng nó ra sao.<br><br>IPAG không tự định nghĩa mình bằng một danh sách công ty hay một sơ đồ tổ chức. IPAG là một bản đồ tích hợp — nơi mọi năng lực, mọi con người, mọi giá trị đều được đếm trên cùng một bàn tay.<br><br><strong>Nhịp Đếm IPAG</strong>— sáu nhịp thật tự nhiên, dẫn bạn từ bức tranh toàn cảnh cho đến đời sống làm việc mỗi ngày. Bản đồ ấy có một cách rất giản dị để bạn đi qua, gọi là Nhịp Đếm IPAG:<br><strong>MỘT NGÔI NHÀ · HAI NĂNG LỰC · BA DÒNG MỘT CỘI THÁP · BỐN CHUỖI MỘT NGÂN HÀNG NĂNG LỰC · NĂM NẾP NGHỀ · SÁU VƯỜN ƯƠM</strong><br><br>Hãy để sáu nhịp ấy dẫn bạn đi — không vội, không áp lực. Chỉ cần bắt đầu từ Một.",
  // 4 con số nổi bật ở hero card đầu module
  conSo: [
    { soLieu: "Gần 30", nhan: "Năm kiến tạo",       icon: "calendar-clock" },
    { soLieu: "35+",    nhan: "Công ty thành viên", icon: "building" },
    { soLieu: "7.000+", nhan: "Cán bộ nhân viên",   icon: "users" },
    { soLieu: "6",      nhan: "Vườn ươm",           icon: "sprout" }
  ],
  // 6 nhịp dạng accordion — nội dung theo "KIẾN TRÚC NGÔI NHÀ IPA — 06 nhịp đếm" (v7, 06/08/2026)
  cacPhan: [
    {
      icon: "home",
      tieuDe: "Một — Một ngôi nhà",
      noiDung: "<em>Hệ sinh thái IPAG.</em><br><br>IPA Group (HNX: IPA) là hệ sinh thái Wellbeing của Việt Nam — gần 30 năm kiến tạo trên ba dòng chảy: tài chính, bảo hiểm và đời sống. Hệ vận hành trên hai nền tảng: <strong>IPA Capability</strong> — nơi năng lực được tích lũy theo mô hình Ngân hàng Năng lực, và <strong>IPA Living</strong> — nơi nếp sống được trải vào đời thường qua ba nếp Sống Khỏe · Sống Giàu · Sống Vui.",
      nhomNen: [
        {
          tieuDe: "1. Tầm nhìn · Sứ mệnh · Phương châm",
          icon: "compass",
          moTa: "Ngôi nhà IPAG bắt đầu từ một đích đến chung và một cách sống chung.",
          cards: [
            { ten: "Tầm nhìn", phuDe: "Một Việt Nam Wellbeing", icon: "eye", noiDung: "Một Việt Nam Wellbeing — nơi người người sống khỏe, nhà nhà sống giàu, cộng đồng sống vui, bắt đầu từ những lựa chọn nhỏ mỗi ngày.<br><br><em>Wellbeing không chỉ là sống khỏe, mà là sống trọn vẹn — về thể chất, tài chính và tinh thần.</em>" },
            { ten: "Sứ mệnh", phuDe: "Gìn giữ gia tài trí tuệ Việt", icon: "target", noiDung: "Kết nối, gìn giữ và trao truyền gia tài trí tuệ Việt — vun bồi Wellbeing cho mỗi người, mỗi gia đình và mỗi tổ chức." },
            { ten: "Phương châm", phuDe: "Wellbeing là một cách sống", icon: "sun", noiDung: "Wellbeing không phải là đích đến, mà là một cách sống — tỉnh thức theo IPA, trọn vẹn theo HWG, bắt đầu sống từ lựa chọn của chúng ta mỗi ngày." }
          ]
        },
        {
          tieuDe: "2. Bốn hệ giá trị I·P·A·G",
          icon: "gem",
          moTa: "Giá trị cốt lõi của IPAG được đúc kết trong bốn chữ I·P·A·G.",
          cards: [
            { ten: "I — Insight & Integration", phuDe: "Thấu hiểu rồi mới tích hợp", icon: "eye", noiDung: "Hiểu con người, thị trường và vấn đề trước khi hành động." },
            { ten: "P — Pathway & Partnership", phuDe: "Định hướng và đồng hành", icon: "route", noiDung: "Không chỉ làm theo từng giao dịch, mà đi cùng khách hàng, đối tác và đồng đội trên cả chặng đường phát triển." },
            { ten: "A — Action & Accountability", phuDe: "Hành động và trách nhiệm", icon: "target", noiDung: "Dám làm, làm đến nơi đến chốn và chịu trách nhiệm với kết quả tạo ra." },
            { ten: "G — Greatness & Generation", phuDe: "Vượt trội và xuyên thế hệ", icon: "trending-up", noiDung: "Làm tốt hôm nay để tạo ra giá trị bền vững cho ngày mai." }
          ],
          ketNhom: "Và trong ngôi nhà IPAG, mỗi CBNV đều được thừa hưởng một gia tài khi bước vào — đó là <strong>Tam Bảo</strong> để biết nơi nương tựa và quay về, <strong>Nền cội Trúc Lâm</strong> để sống nghề, và <strong>Nếp EPIC</strong> để làm việc cùng nhau."
        }
      ],
      ketLuan: "IPAG không chỉ là nơi bạn bắt đầu một công việc mới, mà là nơi bạn được rèn năng lực, tích lũy giá trị, trưởng dưỡng sự trưởng thành cùng đồng đội và góp phần vào mục tiêu chung:<br><strong>«MAKING VIETNAM A BETTER PLACE TO LIVE — FOR GENERATIONS TO COME.»</strong><br>Và để làm được điều đó, IPAG cần những người có năng lực. Năng lực ấy là gì? Câu trả lời sẽ có ở Nhịp Hai."
    },
    {
      icon: "layers",
      tieuDe: "Hai — Hai năng lực: Sống nghề · Phụng sự",
      noiDung: "<em>Sống nghề · Phụng sự.</em><br><br>Hệ sinh thái IPAG vận hành trên hai năng lực song hành: một bên tạo <strong>CUNG</strong>, một bên tạo <strong>CẦU</strong>. Với người làm nghề cụ thể, hai năng lực ấy có tên khác: <strong>Sống nghề</strong> và <strong>Phụng sự</strong>.",
      bang: {
        cols: ["Năng lực", "Chiều Tổ chức", "Chiều Cá nhân"],
        rows: [
          [
            "<strong>Sống nghề</strong><br><em>IPA Capability (Cung)</em>",
            "<strong>Ngân hàng Năng lực:</strong><br>• <strong>IPA Solution (IPAS)</strong> — tri thức, công nghệ, dữ liệu, chuyển đổi số<br>• <strong>IPA Management (IPAM)</strong> — la bàn chuẩn mực, con người, quản trị, vận hành<br>• <strong>IPA Partners (IPAP)</strong> — dẫn vốn đầu tư",
            "<strong>SC — Skill Competency:</strong> kiến thức, kỹ năng, kinh nghiệm và phẩm chất chuyên môn bạn tích luỹ. SC cho thấy bạn biết gì, có gì, đã chuẩn bị được gì."
          ],
          [
            "<strong>Phụng sự</strong><br><em>IPA Living (Cầu)</em>",
            "Đưa Wellbeing vào đời sống qua <strong>AnVie</strong> (đời sống, sức khoẻ), <strong>VNDIRECT</strong> (tài chính, đầu tư), <strong>PTI</strong> (bảo hiểm, bảo vệ), nối liền bởi nền tảng số <strong>D-one</strong>.",
            "<strong>DC — Delivery Competency:</strong> năng lực biến SC thành việc thật, tạo giá trị thực cho người bạn phục vụ. DC cho thấy bạn làm được gì, tác động ra sao."
          ]
        ]
      },
      ketLuan: "<strong>Sống nghề đến trước, phụng sự đến sau — không phải ngược lại.</strong> Một người có SC nhưng chưa chuyển hoá thành DC là người biết nhưng chưa ra việc. Khi SC được sống thành DC đủ lâu, trên một nếp làm nghề bền bỉ, nó dựng nên con đường sự nghiệp."
    },
    {
      icon: "mountain",
      tieuDe: "Ba — Ba dòng một cội: Health · Wealth · Grow",
      noiDung: "<em>Health · Wealth · Grow.</em><br><br>Ba dòng Đạo, Nho, Phật kết tinh ở Trúc Lâm Yên Tử thành một cội chung của người Việt. Từ cội ấy, IPAG dựng nên tháp HWG là ba tầng của một hành trình sống trọn vẹn: Health — Wealth — Grow. Đó cũng chính là ba nếp mà IPAG vun bồi cho mỗi người, mỗi gia đình — đi từ Sống Khỏe, lên Sống Giàu, tới đỉnh Sống Vui.<br><br>IPAG là một hệ sinh thái rộng lớn với hơn 35 công ty thành viên, hơn 7.000 con người và hàng chục sản phẩm, dịch vụ khác nhau. HWG là sợi chỉ đỏ giữ cho tất cả cùng chảy về một hướng: <strong>nền vững trước — tăng trưởng sau — cộng đồng là đích</strong>.<br><br><strong>Phần Một · HWG — Ba tầng giá trị sống</strong> <em>(giá trị IPAG mang lại cho khách hàng và cộng đồng)</em>",
      moSan: true,
      hangTang: [
        { ten: "H — Health · Sống Khỏe", phuDe: "Tầng nền tảng", icon: "heart-pulse", noiDung: "Trước khi phát triển, mỗi người cần có sức khỏe được chăm sóc, tài chính được bảo vệ và những rủi ro lớn được che chắn. Sống Khỏe là có nền vững để yên tâm đi tiếp." },
        { ten: "W — Wealth · Sống Giàu", phuDe: "Tầng gìn giữ và tích lũy", icon: "coins", noiDung: "Khi nền đã vững, con người bắt đầu tích sản, xây dựng gia tài lâu dài và làm cho cuộc sống ngày càng vững vàng hơn. Sống Giàu không chỉ là tiền, mà là mọi giá trị lớn dần theo thời gian." },
        { ten: "G — Grow · Sống Vui", phuDe: "Tầng mở ra cộng đồng", icon: "sun", noiDung: "Khi đã có nền vững và biết tích lũy, con người có thể sống rộng hơn: biết chia sẻ, chở che và cùng người khác lớn lên. Sống Vui là niềm vui của sự thuộc về một cộng đồng có ý nghĩa.<br><br>Ba cộng đồng của ba gian — <strong>VNDGO, AnVie Life, PTICare</strong> — đều là nơi tầng Grow được sống thật." }
      ],
      bang: {
        tieuDe: "Phần Hai · HWG — Ba tầng sự nghiệp",
        moTa: "Con đường phát triển của bạn ở IPAG. Ba tầng HWG không chỉ là giá trị IPAG mang lại cho khách hàng, mà còn là con đường sự nghiệp của chính bạn ở IPAG.",
        cols: ["Tầng", "Ý nghĩa", "Thước đo"],
        rows: [
          ["<strong>H — Health</strong><br><em>Nền của sự nghiệp</em>", "«Sức khỏe nghề nghiệp» của một con người — độ chín trong hành vi tuân theo Nền và Nếp của IPAG, cũng như trong năng lực SC và DC → đi sâu hơn vào độ chín của chính mình.", "<strong>BMI</strong> — chiều sâu trưởng thành để một người biết tự quản trị mình, sống đúng Nền và Nếp, tạo ra kết quả thật mỗi ngày."],
          ["<strong>W — Wealth</strong><br><em>Độ «giàu» của sự nghiệp</em>", "Phạm vi trách nhiệm mà một người có thể gánh vác. Khi nền bên trong đã đủ vững, bạn bắt đầu mở rộng vai trò, tầm ảnh hưởng và khả năng tạo giá trị → đi rộng hơn trong trách nhiệm mình đảm nhận.", "<strong>SOA</strong> — phạm vi trách nhiệm bạn đảm nhận."],
          ["<strong>G — Grow</strong><br><em>Tầng của tuệ giác</em>", "Khả năng nhìn sâu vào con người, công việc và hệ thống; biết điều gì là đúng, điều gì là bền, điều gì cần gìn giữ và chuyển hóa → đi xa hơn bằng tuệ giác tích lũy qua làm nghề.", "<strong>Wisdom to Success</strong> — tuệ giác để đi đến thành công, không chỉ cho riêng mình, mà cho cộng đồng mình phụng sự."]
        ]
      }
    },
    {
      icon: "git-branch",
      tieuDe: "Bốn — Bốn chuỗi giá trị, bốn hướng nghề",
      noiDung: "<em>GTM · VCO · BIS · CG: từ tổ chức đến sự nghiệp.</em><br><br>Nếu HWG là ba tầng giá trị IPAG tạo ra, thì bốn chuỗi giá trị GTM — VCO — BIS — CG chính là cách IPAG vận hành để tạo ra giá trị đó.<br><br>Tại IPAG, hoạt động của tổ chức được vận hành qua bốn chuỗi giá trị chính: GTM, VCO, BIS và CG. Mỗi chuỗi có vai trò riêng, nhưng không hoạt động tách rời. Tất cả cùng kết nối để tạo nên một hệ thống vận hành thống nhất — từ phát triển thị trường, phục vụ khách hàng, hỗ trợ ra quyết định, đến xây dựng nền tảng nội bộ.",
      moSan: true,
      hangTang: [
        { ten: "GTM — Go-To-Market", phuDe: "Mạch chảy ra ngoài", icon: "trending-up", noiDung: "GTM là chuỗi giá trị hướng ra thị trường, chịu trách nhiệm cho tăng trưởng, tiếp cận khách hàng mới và mở rộng cơ hội kinh doanh. Đây là «mạch chảy ra ngoài» của IPAG — nơi tổ chức đưa sản phẩm, dịch vụ và cơ hội mới đến với thị trường." },
        { ten: "VCO — Value Chain Operation", phuDe: "Mạch giữ lời hứa", icon: "heart-handshake", noiDung: "VCO là chuỗi giá trị phụ trách vận hành và đồng hành cùng khách hàng. Nếu GTM giúp IPAG có được khách hàng, thì VCO đảm bảo IPAG phục vụ khách hàng tốt. Đây là «mạch giữ lời hứa» — nơi lời hứa được thực hiện bằng trải nghiệm thật." },
        { ten: "BIS — Business Information System", phuDe: "Mạch soi đường", icon: "lightbulb", noiDung: "BIS là chuỗi giá trị hỗ trợ quản trị và ra quyết định. Đây là «mạch soi đường» của IPAG — giúp tổ chức có dữ liệu, thông tin, chính sách và hệ thống cần thiết để vận hành minh bạch, hiệu quả, đúng hướng." },
        { ten: "CG — Capability Guardian", phuDe: "Mạch giữ nền", icon: "shield", noiDung: "CG là chuỗi giá trị nền tảng nội bộ, cung cấp dịch vụ dùng chung và năng lực quản trị xuyên suốt cho toàn bộ SBU trong IPAG Group — hiện gồm Fincon, Workplace, SAS, Cyber Workplace, IT Services và EPIC HR Services (danh sách đang được chuẩn hoá theo Từ điển KB). Đây là «mạch giữ nền» — giúp các SBU và các «ngôi nhà nhỏ» trong IPAG vận hành ổn định, an toàn và hiệu quả hơn." }
      ]
    },
    {
      icon: "recycle",
      tieuDe: "Năm — Năm nếp nghề IPAGer",
      noiDung: "<em>Trà Việt · La Bàn · Soi Sáng · Gửi Trao · Trao Truyền.</em><br><br>Năm bộ kỹ năng sống nghề, đi theo đúng thứ tự bạn sẽ trải qua, không phải năm khoá học rời rạc.",
      bangNep: [
        { nep: "Nếp Trà Việt", tag: "IPA_3B · Bạn · Bàn · Bày", yNghia: "Gặp được người trước khi bàn được việc", qua: "TÍN", moc: "Có người mình dám hỏi khi chưa biết" },
        { nep: "Nếp La Bàn", tag: "IPAM Way", yNghia: "Đưa việc từ ý định tới làm chủ", qua: "TẤN", moc: "Làm được việc dài không cần ai nhắc, và biết lúc dừng" },
        { nep: "Nếp Soi Sáng", tag: "IPAX · Tâm · Tầm · Trí", yNghia: "Soi việc và soi mình mà không phán xét", qua: "NIỆM", moc: "Kể lại việc khó mà không lẫn phán xét vào lời kể" },
        { nep: "Nếp Gửi Trao", tag: "Tứ Quy", yNghia: "Làm ra khuôn mẫu để người khác dùng lại", qua: "ĐỊNH", moc: "Có thứ mình làm ra mà người khác dùng lại được" },
        { nep: "Nếp Trao Truyền", tag: "IPAL · Dẫn · Dụng · Dưỡng", yNghia: "Người cũ kèm người mới, không làm hộ", qua: "TUỆ", moc: "Người mình kèm nay tự làm được, và kèm được người khác" }
      ],
      nhomNenTieuDe: "Chi tiết từng nếp",
      nhomNen: [
        {
          tieuDe: "1. Nếp Trà Việt",
          phuDe: "Bạn · Bàn · Bày",
          icon: "coffee",
          moTa: "Làm Bạn trước khi Bàn việc, rồi Bày cùng nhau. Ba chữ B, ba tầng sâu:",
          cards: [
            { ten: "Bạn", phuDe: "Thấy tận gốc động cơ", icon: "search", noiDung: "Gặp được người, hiểu người từ gốc rễ." },
            { ten: "Bàn", phuDe: "Thông tận ngọn", icon: "messages-square", noiDung: "Hiểu nhu cầu, rủi ro và trải nghiệm." },
            { ten: "Bày", phuDe: "Làm tận tâm", icon: "heart-handshake", noiDung: "Trình bày và làm việc với trái tim." }
          ],
          ketNhom: "Bàn trà không phân biệt cao thấp — ai cũng được lắng nghe, được thấy, được cảm thông."
        },
        {
          tieuDe: "2. Nếp La Bàn",
          phuDe: "IPAM Way",
          icon: "compass",
          moTa: "Đưa việc từ ý định tới lúc làm chủ, qua bốn kim: đích, việc, đội nhóm, đường đã đi. <strong>IPAM Way</strong> — phương pháp bên trong nếp này — bắt đầu bằng chữ NHÌN và kết thúc bằng chữ THẤY: có thể nhìn mà không thấy, nhưng không thể thấy mà chưa nhìn."
        },
        {
          tieuDe: "3. Nếp Soi Sáng",
          phuDe: "IPAX · Tâm · Tầm · Trí",
          icon: "lightbulb",
          moTa: "Soi tâm, soi tầm, soi trí — không phải để bị phán xét, mà để chính bạn thấy mình rõ hơn. Ba khuôn để soi:",
          cards: [
            { ten: "SBI", phuDe: "Soi sự việc", icon: "clipboard-list", noiDung: "Kể lại sự việc, mô tả hành vi, rút ra cái thấy." },
            { ten: "TAC", phuDe: "Soi luồng việc", icon: "workflow", noiDung: "Chuyển hoá, nhân lên, tiếp nối." },
            { ten: "CAT", phuDe: "Soi người", icon: "heart", noiDung: "Trái tim dẫn, thêm giá trị, rồi trao lại." }
          ],
          ketNhom: "Đây cũng là nơi mười bốn chuẩn mực ứng xử (14 CoC) được sống mỗi ngày."
        },
        {
          tieuDe: "4. Nếp Gửi Trao",
          phuDe: "nạp vào Tứ Quy",
          icon: "send",
          moTa: "Khi bạn tìm ra cách làm tốt, bạn gửi lại cho hệ thống để trở thành tài sản chung — dưới ba dạng sản phẩm cụ thể:",
          cards: [
            { ten: "Chữ", phuDe: "Codebook · Glossary", icon: "type", noiDung: "Một chữ mới được đặt tên và định nghĩa rõ." },
            { ten: "Khuôn mẫu", phuDe: "Framework làm việc", icon: "layout-template", noiDung: "Cách làm được đúc thành khuôn để người khác dùng lại." },
            { ten: "Bài học", phuDe: "Thành công lẫn sai sót", icon: "book-open", noiDung: "Những bài học thật trong quá trình làm nghề — cả thành công lẫn sai sót — được ghi lại để người sau học hỏi được từ đó, không phải một lời khuyên chung chung." }
          ],
          ketNhom: "Ba sản phẩm ấy được nạp vào <strong>Tứ Quy</strong> — bốn tầng chuẩn mực của ngôi nhà:<br>• <strong>Quy tắc</strong> — cái bất biến, kim chỉ nam<br>• <strong>Quy chuẩn</strong> — từ điển, bản đồ, chuẩn mực<br>• <strong>Quy trình</strong> — cách làm từng bước<br>• <strong>Quy định</strong> — điều phải giữ, con số cụ thể<br><br><em>Chữ · Khuôn mẫu · Bài học là BA dạng sản phẩm Nếp Gửi Trao tạo ra; Tứ Quy vẫn là BỐN tầng chuẩn mực nhận vào — hai tầng khái niệm khác nhau, không phải một cái thay cho cái kia.</em>"
        },
        {
          tieuDe: "5. Nếp Trao Truyền",
          phuDe: "IPAL · Dẫn · Dụng · Dưỡng",
          icon: "repeat",
          moTa: "Người đi trước kèm người sau, không làm hộ — soi cùng khi người mới làm sai. Trao cả lý do WHY, không chỉ cách làm HOW: người nhận được cách làm thì lặp lại máy móc, người nhận được lý do thì sửa được khi hoàn cảnh đổi."
        },
        {
          tieuDe: "Năm nếp nuôi nhau theo chu trình liên tục",
          icon: "recycle",
          moTa: "Năm nếp không đứng riêng lẻ, mà nuôi dưỡng lẫn nhau trong một chu trình không có điểm kết thúc:<span class=\"nhip-flow\">Trà Việt → Soi Sáng → Gửi Trao → La Bàn → Trao Truyền → <em>(quay lại)</em> Trà Việt</span>Mỗi nếp làm dày nếp kế tiếp: bạn gặp người (Trà Việt) rồi soi lại mình (Soi Sáng), từ đó gửi lại kinh nghiệm (Gửi Trao), dùng để làm việc có phương pháp (La Bàn), và kèm người đi sau (Trao Truyền) — rồi lại gặp người mới, chu trình tiếp diễn."
        }
      ]
    },
    {
      icon: "sprout",
      tieuDe: "Sáu — Sáu vườn ươm năng lực",
      noiDung: "<em>Tích đức · Tích nghề · Tích tín.</em><br><br>IPAG có 6 lĩnh vực kinh doanh chính, gọi là 6 vườn ươm năng lực — mỗi vườn không chỉ vận hành một mảng kinh doanh, mà còn nuôi dưỡng năng lực, phát triển giá trị mới và đóng góp vào mục tiêu chung của Tập đoàn.",
      bang: {
        cols: ["Vườn ươm", "Bao gồm", "Sứ mệnh"],
        rows: [
          ["<strong>1. Tài chính Bền vững</strong>", "Chứng khoán · Bảo hiểm · Quản lý Quỹ", "Ươm năng lực về vốn, chứng khoán và bảo hiểm cho người Việt."],
          ["<strong>2. Công nghệ Sinh học</strong>", "NAO Solution · GAO Solution · Khang Tuệ · Bản Địa Việt", "Gìn giữ di sản thiên nhiên, phát triển giải pháp sinh học, mở đường cho tăng trưởng xanh."],
          ["<strong>3. Thực phẩm Bền vững</strong>", "Vietcharm · Delivie · Homefood Vinabee", "Chăm cái ăn, cái ở cho mỗi gia đình Việt — cùng đích Wellbeing với vườn Sức khỏe & Y tế dự phòng."],
          ["<strong>4. Sức khỏe và Y tế dự phòng</strong>", "AnVie Life · AnVie GSF · AnVie CBX", "Nuôi dưỡng cách sống thuận tự nhiên, chăm sức khoẻ và chất lượng sống."],
          ["<strong>5. Đầu tư ESG</strong>", "Năng lượng Bắc Hà — hai nhà máy thuỷ điện Nậm Phàng", "Dẫn dòng vốn tới những giá trị bền vững, có trách nhiệm với môi trường và xã hội."],
          ["<strong>6. Giáo dục và Đào tạo</strong>", "Living MBA — lõi của IPAG", "Vun bồi con người, gieo tri thức và trao truyền năng lực cho thế hệ sau."]
        ]
      },
      nhomNen: [
        {
          tieuDe: "Ba điều mỗi người IPAG tích lũy",
          icon: "user-check",
          moTa: "Sáu vườn ươm khác nhau ở lĩnh vực và cách làm nghề, nhưng cùng chung một đích đến: <strong>Wellbeing cho cộng đồng người Việt</strong>.<br><br>Dù ở vườn ươm nào, người IPAG đều được kỳ vọng tích luỹ ba điều:",
          cards: [
            { ten: "Tích đức", phuDe: "Nhân cách & tâm thế đúng đắn", icon: "heart-handshake", noiDung: "Làm nghề chuẩn mực, giữ nhân cách và tâm thế đúng đắn." },
            { ten: "Tích nghề", phuDe: "Chuyên môn vượt trội", icon: "wrench", noiDung: "Không ngừng nâng cao tay nghề, rèn luyện chuyên môn vượt trội." },
            { ten: "Tích tín", phuDe: "Uy tín bền vững", icon: "badge-check", noiDung: "Giữ chữ tín trong từng việc cụ thể, xây dựng uy tín bền vững." }
          ]
        }
      ]
    }
  ],
  // KẾT · DÒNG CHẢY IPAG — chương chốt cuối module (render dưới accordion)
  ketModule: "Vậy là bạn đã đi hết sáu nhịp của ngôi nhà, và đi qua chặng đường của chính mình. Trước khi gấp trang này lại, hãy nhìn lại câu đã đứng trước mọi kiến trúc, lần này với một cái thấy đầy đủ hơn ngày mới mở đầu:<br><br><strong>«IPA LÀ NẾP NHÀ — IPAGer LÀ NẾP NGHỀ — IPAG LÀ DÒNG CHẢY TRÍ TUỆ CỦA MỘT TẬP THỂ TỈNH THỨC.»</strong><br><br>Ba vế của câu ấy không phải chỉ để đọc — mỗi vế đang được giữ sống mỗi ngày bằng một tài liệu và một cách sống cụ thể:<br>• <strong>Nếp Nhà IPA giữ NGƯỜI</strong> — sống trong 14 Chuẩn mực Ứng xử, cách mọi IPAGer đối xử với nhau và với khách mỗi ngày, không cần ai nhắc.<br>• <strong>Nếp Nghề IPAGer giữ CHUẨN</strong> — sống trong năm nếp nghề bạn vừa đi qua ở Nhịp Năm.<br>• <strong>Dòng chảy IPAG giữ TUỆ</strong> — không nằm trong một người, mà nằm trong cái được gửi trao lại: một Chữ, một Khuôn mẫu, một Bài học — để người sau không phải bắt đầu lại từ đầu.<br><br>Nếp nhà là cái bạn bước vào; Nếp nghề là cái bạn được rèn luyện và mang theo. Sự nghiệp ở đâu cũng cần năm nếp ấy, nhưng nó chỉ thực sự phát huy trong một ngôi nhà có Tam Bảo — có Nền — có Nếp.<br><br><strong>Chào mừng bạn đến Ngôi nhà IPAG.</strong>"
};

// --- 2.2. MODULE: VAI TRÒ CỦA BẠN ---
// Schema mới: theoKhoi (optional, ở TRÊN) + chung (bắt buộc, ở DƯỚI).
// Nếu khối nào không được định nghĩa trong theoKhoi → engine tự bỏ qua, chỉ hiện phần chung.
const vaiTroContent = {
  tieuDe: "Bạn trong bức tranh chung: Người gửi và người thừa kế",
  moTa: "Gia nhập IPAG là bước vào một dòng chảy năng lực đã được tích lũy qua gần 30 năm. Tại đây, mỗi CBNV vừa là người thừa kế những kinh nghiệm, tri thức và cách làm của thế hệ đi trước, vừa là người gửi thêm năng lực của mình vào «Ngân hàng Năng lực» cho người đến sau.<br><br>Một quy trình bạn chuẩn hóa, một dòng code bạn viết, một cách làm bạn cải tiến hôm nay có thể tiếp tục tạo giá trị cho nhiều dự án, khách hàng và doanh nghiệp trong tương lai.",

  // Ẩn nhóm "Nguyên lý chung" (4 card) với các khối liệt kê dưới đây.
  // Card "Vai trò lãnh đạo" (noiDungMoRong) LUÔN hiển thị cho mọi khối.
  // Bật lại cho Khối Kinh doanh: xoá "kinhDoanh" khỏi mảng.
  anNguyenLyChoKhoi: ["kinhDoanh"],

  // --- PHẦN RIÊNG THEO KHỐI ---
  // Khối nào có nội dung riêng thì khai báo tại đây. Khối chưa có → chỉ hiện phần chung.
  theoKhoi: {
    kinhDoanh: {
      tieuDe: "Direct Client tại IPAG",
      dienGiai: "<strong>Direct Client của IPAG khác với một nhân viên kinh doanh thông thường ở một điểm gốc: bạn không advice và advocate điều bạn chưa từng sống.</strong><br><br>Khi bạn đã thật sự sống nếp sống IPA Living — chăm sóc sức khỏe theo HWG, quản lý tài chính tỉnh thức, sống chủ tâm và hiện diện mỗi ngày — thì lời bạn nói với khách hàng không còn là lời chào hàng. Nó là sự chia sẻ một trải nghiệm thật. Niềm tin của khách hàng bắt đầu từ chính sự chân thật ấy.",
      bang: {
        headers: ["Bước", "Với chính mình", "Với khách hàng"],
        rows: [
          ["1. Sống",       "Trải nghiệm HWG và I·P·A trong chính đời sống của bạn.",  "Bạn trở thành bằng chứng sống cho điều mình sẽ chia sẻ."],
          ["2. Tin",        "Hình thành niềm tin thật từ trải nghiệm, không phải từ kịch bản.", "Khách hàng cảm nhận được sự chân thật, không phải kỹ thuật bán hàng."],
          ["3. Đồng hành",  "Lắng nghe nhu cầu thật của khách bằng sự hiện diện (Presence).", "Đồng hành cùng khách trên hành trình wellbeing, không chỉ chốt một giao dịch."]
        ]
      },
      nguyenTac: "Advocate đến từ trải nghiệm. Advice đến từ niềm tin. Cả hai bắt đầu từ việc bạn đã sống nếp sống ấy trước."
    }
    // backOffice: chưa có nội dung riêng → engine tự bỏ qua
  },

  // --- PHẦN CHUNG — áp dụng cho mọi khối ---
  chung: {
    nguyenLy: [
      {
        icon: "heart-handshake",
        tieuDe: "Con người là trung tâm",
        noiDung: "IPAG xem con người là tài sản quan trọng nhất. Vì vậy, tổ chức cam kết đầu tư dài hạn vào con người thông qua môi trường làm nghề, cơ hội trải nghiệm và sự đồng hành của tập thể.<br><br>Mỗi CBNV được trao cơ hội khai phá năng lực tự thân, phát triển năng lực chuyên môn, xây dựng tinh thần làm chủ và ý thức đóng góp cho sự trưởng thành chung của tổ chức."
      },
      {
        icon: "key-round",
        tieuDe: "Trao quyền đi cùng trách nhiệm",
        noiDung: "Mỗi người được trao thẩm quyền trong phạm vi của mình, cùng tinh thần làm chủ và chịu trách nhiệm với kết quả — không có thẩm quyền mà không có trách nhiệm, không có trách nhiệm mà không có thẩm quyền."
      },
      {
        icon: "target",
        tieuDe: "Bạn được đo bằng tác động",
        noiDung: "Giá trị công việc không chỉ nằm ở nỗ lực hay số lượng hoạt động, mà ở tác động tích cực tạo ra cho khách hàng, đội ngũ, cổ đông, cộng đồng và tổ chức.<br><br>Mỗi việc làm có giá trị khi góp phần giải quyết vấn đề, cải thiện cách vận hành hoặc làm giàu thêm Ngân hàng Năng lực của IPAG."
      },
      {
        icon: "pen-line",
        tieuDe: "Hành trình bắt đầu từ Một lời cam kết với nghề",
        noiDung: "Ở cuối giai đoạn Onboarding, mỗi CBNV sẽ viết một lời cam kết với nghề nghiệp của mình: một câu sứ mệnh cá nhân và một câu tầm nhìn hướng đến điều lớn hơn trong hành trình làm nghề.<br><br>Lời cam kết không cần nộp lại, không có sự đánh giá đúng sai. Đó là lời tự nhắc nhở chân thật về lý do mình làm nghề và cách mình muốn phụng sự.<br><br>Đây là điểm khởi đầu của tinh thần <strong>Sống nghề — Phụng sự</strong> tại IPAG."
      },
      {
        icon: "crown",
        tieuDe: "Vai trò lãnh đạo",
        phuDe: "Tiếp sức — Kiến tạo nếp sống — Dựng niềm tin",
        noiDung: "Lãnh đạo IPAG mang ba vai trò gắn bó với nhau.",
        // noiDungMoRong: dữ liệu mở rộng cho nguyên lý này (render dạng full-width).
        // Các nguyên lý khác không có field này → giữ card đơn giản.
        noiDungMoRong: {
          bang: {
            headers: ["Vai trò lãnh đạo", "Thể hiện trong thực tế"],
            rows: [
              ["Người tiếp sức",        "Trao quyền, gỡ rào cản, cấp năng lực và nguồn lực để đội ngũ tự phát huy — đúng tinh thần Empowering. Lãnh đạo không giành làm thay, mà làm cho người khác làm được."],
              ["Người kiến tạo nếp sống", "Tạo môi trường để nếp sống IPA Living lan tỏa: cách họp, cách ghi nhận, cách ra quyết định đều phản chiếu Chủ tâm · Hiện diện · Tỉnh thức. Văn hóa được kiến tạo bằng hành vi của lãnh đạo, không bằng khẩu hiệu."],
              ["Người dựng niềm tin",   "Niềm tin là tài sản quý nhất của một hệ sinh thái mở. Lãnh đạo gìn giữ niềm tin với bốn nhóm: đội ngũ, khách hàng, cổ đông và cộng đồng — bằng sự nhất quán giữa lời nói và hành động."]
            ]
          },
          thaoLuan: {
            tieuDe: "Vì sao niềm tin là trung tâm?",
            noiDung: "Ngân hàng Năng lực chỉ vận hành được khi các thành viên tin tưởng chia sẻ năng lực và cơ hội cho nhau. Hệ sinh thái mở chỉ cộng hưởng khi có niềm tin làm chất kết dính. Một lãnh đạo đánh mất niềm tin sẽ làm gãy chính cơ chế tạo ra giá trị 1 cộng 1 lớn hơn 2."
          },
          nguyenTac: "Lãnh đạo không tạo giá trị bằng việc tự mình làm nhiều hơn, mà bằng việc tiếp sức cho nhiều người làm được, trong một nếp sống và một niềm tin chung."
        }
      }
    ]
  }
};

// --- 2.3. MODULE: VĂN HOÁ EPIC — NHỊP ĐẾM EPIC ---
// Dùng chung engine renderNhipDem() với module "IPAG là ai".
// Cấu trúc: tieuDe · moTa · cacPhan[6] · ketModule (câu chốt cuối).
const epicContent = {
  tieuDe: "Văn hoá quản trị EPIC",
  moTa: "EPIC là văn hóa quản trị con người của IPAG, nơi mỗi CBNV tiếp nhận, thực hành và trao truyền những giá trị đã làm nên bản sắc của tổ chức. Thông qua EPIC, mỗi người được dẫn dắt để hiểu mình, hiểu vai trò, hiểu cách IPAG vận hành và từng bước trưởng thành trong hành trình sự nghiệp tại tổ chức.<br><br>EPIC được xây dựng trên bốn giá trị cốt lõi: <strong>Empowering – People – Impact – Collaboration</strong> — trao quyền bằng sự rõ ràng, đặt con người ở trung tâm, hướng đến giá trị thật có thể đo được và cộng tác để tạo nên kết quả lớn hơn từng cá nhân. Đây không phải là một bộ khẩu hiệu, mà là cách IPAG định hướng để mỗi người hiểu đúng vai, kết nối đúng người, cộng đúng việc và tạo đúng giá trị.<br><br>Trong hành trình hội nhập, EPIC đồng hành cùng CBNV mới qua ba chặng: <strong>Văn để Hóa</strong> (Đọc để cảm văn hóa) — <strong>Duyên để Giác</strong> (Thực hành để hiểu nếp sống) — <strong>Hạnh để Hành</strong> (Sống nghề để phụng sự). Qua đó, mỗi người từng bước hình thành nền tảng làm việc có chủ tâm, có kết nối, có trách nhiệm và có đóng góp.<br><br>Sáu nhịp dưới đây kể trọn ngôi nhà EPIC — từ Một ngôi nhà đến Sáu vườn ươm. Cứ bắt đầu từ Một, không cần đọc hết trong một lần.",
  cacPhan: [
    {
      icon: "home",
      tieuDe: "Một — Một ngôi nhà",
      noiDung: "<em>I · P · A: Tam Bảo — Nền cội Trúc Lâm — Nếp EPIC.</em><br><br>Trước khi nhận việc mới, mình muốn kể cho bạn về một gia tài — vì mọi thứ trong ngôi nhà này đều xây trên đó. Gia tài ấy đọc bằng ba chữ I·P·A, và cả ba chảy ra từ một điểm tựa: <strong>Intention</strong> — lấy con người làm trung tâm, hướng tới phụng sự.",
      nhomNen: [
        {
          tieuDe: "I · Tam Bảo — ba chỗ để bạn quay về nương tựa",
          icon: "gem",
          moTa: "Đây không phải ba giá trị treo tường, mà là ba báu vật thật — ba trung tâm giữ cho ngôi nhà đứng vững:",
          cards: [
            { ten: "COL — Lãnh đạo", phuDe: "Center of Leadership · giữ CHÍ HƯỚNG", icon: "crown", noiDung: "Lãnh đạo tổ chức tin, luôn yểm trợ và cùng bạn chốt lại — không phải «mọi người thấy sao thì thấy». Khi bạn chưa có hướng đi, khi có áp lực từ bên ngoài, khi các bên chưa cùng tiếng nói — đó là lúc bạn nhớ tới báu vật này." },
            { ten: "COP — Chuẩn mực tổ chức", phuDe: "Center of Practice · giữ CHUẨN", icon: "scroll", noiDung: "Phương pháp làm nghề chuẩn mực — Bộ Tứ Quy: Quy tắc, Quy chuẩn, Quy trình, Quy định. COP cũng là tên tiếng Anh của bộ Tứ Quy — Corporate Operation Practice. Khi bí, khi không biết bắt đầu từ đâu, bạn quay về đó.<br><span class=\"nhip-note\">💡 Chữ COP dùng cho cả người và tài liệu: vừa là trung tâm giữ chuẩn, vừa là tên bộ tài liệu chuẩn. Khi gặp chữ «EPIC COP» hay «IPAG COP», đó chính là bộ tài liệu do trung tâm này giữ.</span>" },
            { ten: "COE — Đồng nghiệp", phuDe: "Center of Excellence · giữ NHỊP", icon: "users", noiDung: "Những đồng nghiệp đã đi qua đúng những gì bạn đang trải, luôn có mặt khi bạn cần soi lại việc mình làm." }
          ],
          ketNhom: "Ba báu vật này là nơi bạn quay về khi mọi thứ không suôn sẻ. Cứ nhớ vậy là đủ, nhé."
        },
        {
          tieuDe: "P · Presence — Nền cội Trúc Lâm",
          icon: "leaf",
          moTa: "Nếp sống trong ngôi nhà này có gốc từ gia tài Trúc Lâm — điều mà thế giới hôm nay gọi là mindfulness.<br><br>Trúc Lâm là dòng thiền đầu tiên do người Việt lập ra, nơi vua Trần Nhân Tông kết tinh ba dòng Đạo, Nho, Phật thành một mạch riêng, sau hai lần giữ nước rồi lên Yên Tử sống trọn phần đời còn lại.<br><br>Ba chữ nhà mình giữ lại từ ngài:",
          cards: [
            { ten: "Sống đời", phuDe: "Rèn luyện ngay trong nghề", icon: "footprints", noiDung: "Làm nghề là trải nghiệm giúp bạn rèn luyện ngay trong nghề. Chỗ khó nhất của nghề chính là cơ hội để khám phá bản thân và tự sửa mình." },
            { ten: "Vui đạo", phuDe: "Vui khi làm việc", icon: "smile", noiDung: "Người làm nghề phải có khả năng vui khi làm việc, dù trong bất cứ hoàn cảnh nào." },
            { ten: "Thả tùy duyên", phuDe: "Linh hoạt cách làm, không đổi lời hứa", icon: "wind", noiDung: "Tùy duyên là ở cách làm và nhịp đi; còn mục đích, chuẩn mực và lời hứa thì không đổi." }
          ]
        },
        {
          tieuDe: "A · Awareness — Nếp EPIC",
          icon: "sparkles",
          moTa: "Nếu Nền cội giúp bạn sống thế nào với chính mình, thì Nếp EPIC giúp bạn sống thế nào với người khác. Bốn chữ, cùng mở bằng chữ CÙNG:",
          cards: [
            { ten: "E — Empowering", phuDe: "Cùng trao quyền", icon: "key", noiDung: "Giao việc thì giao cả quyền quyết." },
            { ten: "P — People", phuDe: "Cùng tiếp sức", icon: "hand-heart", noiDung: "Thấy người bên cạnh đuối thì đỡ." },
            { ten: "I — Impact", phuDe: "Cùng cộng tác", icon: "users-round", noiDung: "Làm cùng nhau là mặc định, làm một mình mới là ngoại lệ." },
            { ten: "C — Collaboration", phuDe: "Cùng tạo giá trị", icon: "gift", noiDung: "Đo bằng cái để lại, và cái để lại là của chung." }
          ]
        }
      ],
      ketLuan: "Ba chữ I·P·A làm nên <strong>Nếp Nhà</strong>. Còn <strong>Nếp Nghề</strong> — hẹn gặp bạn ở Nhịp Năm. Còn IPAG là dòng chảy — nhiều đời IPAGer cùng sống một nếp, làm nên dòng chảy trí tuệ xuyên thế hệ. Trong ngôi nhà này, bạn sẽ lớn lên bằng những năng lực gì? Câu trả lời ở Nhịp Hai, nhé."
    },
    {
      icon: "layers",
      tieuDe: "Hai — Hai năng lực: Sống nghề · Phụng sự",
      noiDung: "<em>SC · DC: từ biết đến làm, từ làm đến sống nghề.</em><br><br>Ở IPAG, bạn không chỉ đứng trên một chỗ, mà trên hai chiều song song.",
      nhomNen: [
        {
          tieuDe: "Hai chiều bạn đang đứng trong ngôi nhà",
          icon: "git-branch",
          cards: [
            { ten: "Chiều Con người (COE)", phuDe: "Chiều Một — nơi bạn thuộc về", icon: "user-round", noiDung: "Nơi năng lực của bạn được nuôi dưỡng lâu dài. COE là nơi bạn thuộc về — nơi bạn được hỏi: «Bạn đang trở thành ai?» Người giữ chiều này là <strong>FD Lead</strong> — người giữ một chuyên môn nghề trong COE, đỡ bạn về nghề." },
            { ten: "Chiều Công việc (FC & OC)", phuDe: "Chiều Hai — nơi bạn tạo giá trị mỗi ngày", icon: "briefcase", noiDung: "Nơi bạn làm việc và tạo giá trị mỗi ngày.<br>• <strong>FC (Functional Chain)</strong> trao cho bạn một chỗ đứng — bạn nhận SOA (phạm vi trách nhiệm), giữ lâu dài, nhịp đều theo kỳ.<br>• <strong>OC (Opportunity Chain)</strong> trao cho bạn một vai — chỉ bật lên khi có cơ hội mới: bạn nhận vai R hoặc A cho một output cụ thể, xong việc thì trả vai ấy." }
          ],
          ketNhom: "Tại sao cần phân biệt hai chiều? Vì IPAG muốn tách rời việc «giao việc» và việc «nuôi người» — để bạn vừa được trao quyền, vừa được tiếp sức.<br><span class=\"nhip-note nhip-note--ok\">✅ Cách tự kiểm tra: cầm một đơn vị bất kỳ lên và hỏi ba câu — ai nuôi nghề, ai chạy việc, ai mở đường. Ba câu ấy luôn có câu trả lời.</span>"
        },
        {
          tieuDe: "Sống nghề · Phụng sự — SC · DC",
          icon: "book-open",
          cards: [
            { ten: "Sống nghề — SC", phuDe: "Skill Competency", icon: "book-open", noiDung: "Kiến thức, kỹ năng, kinh nghiệm và phẩm chất chuyên môn bạn tích lũy qua học hỏi, rèn luyện và va chạm công việc. Làm nghề, trước hết, là để chính bạn trưởng thành — chỗ khó nhất của nghề chính là cơ hội để bạn khám phá bản thân và tự sửa mình.<br><br><em>SC cho thấy: bạn biết gì, có gì, đã chuẩn bị được gì cho hành trình làm nghề.</em>" },
            { ten: "Phụng sự — DC", phuDe: "Delivery Competency", icon: "target", noiDung: "Năng lực biến SC thành việc thật, giúp công việc đi đến kết quả cuối cùng và tạo giá trị thực cho người bạn phục vụ.<br><br><em>DC cho thấy: bạn làm được gì, tạo ra giá trị gì, và tác động ra sao đến người mình phục vụ.</em>" }
          ]
        }
      ],
      ketLuan: "Một người có SC nhưng chưa chuyển hóa thành DC là người «biết nhưng chưa ra việc». Khi SC được sống thành DC đủ lâu, trên một nếp làm nghề bền bỉ, nó dựng nên con đường sự nghiệp. <strong>Sống nghề đến trước, phụng sự đến sau — không phải ngược lại.</strong> Vậy con đường sự nghiệp ấy dẫn bạn tới đâu? Đó là Nhịp Ba, nhé."
    },
    {
      icon: "mountain",
      tieuDe: "Ba — Ba dòng một cội: Tháp Sự Nghiệp HWG",
      noiDung: "<em>Health · Wealth · Grow: từ giá trị đến sự nghiệp.</em><br><br>Ba dòng Đạo, Nho, Phật kết tinh ở Trúc Lâm thành một cội chung của người Việt. Từ cội ấy, IPAG dựng nên <strong>Tháp Sự Nghiệp</strong> của bạn — ba tầng H·W·G: nền vững trước, tăng trưởng sau, tuệ giác là đích.",
      thap: [
        { chu: "G", ten: "Grow", nhan: "Sống vui", noiDung: "Tầng tuệ giác — nhìn sâu vào con người, công việc và hệ thống; biết điều gì đáng gìn giữ, điều gì cần chuyển hóa.", thuocDo: "Wisdom to Success" },
        { chu: "W", ten: "Wealth", nhan: "Sống giàu", noiDung: "Độ giàu của sự nghiệp — phạm vi trách nhiệm bạn có thể gánh vác: vai trò, tầm ảnh hưởng, khả năng tạo giá trị.", thuocDo: "SOA" },
        { chu: "H", ten: "Health", nhan: "Sống khỏe", noiDung: "Nền của sự nghiệp — \"sức khỏe nghề nghiệp\", độ chín trong hành vi, sống đúng Nền và Nếp.", thuocDo: "BMI" }
      ],
      ketLuan: "💎 Tầng G — tuệ giác — chính là chữ Tuệ, quả cuối cùng của năm nếp nghề bạn sẽ gặp ở Nhịp Năm."
    },
    {
      icon: "git-branch",
      tieuDe: "Bốn — Bốn chuỗi một Ngân hàng Năng lực",
      noiDung: "<em>GTM · VCO · BIS · CG: từ tổ chức đến sự nghiệp.</em><br><br>Nếu HWG là ba tầng giá trị IPAG tạo ra cho bạn, thì bốn chuỗi giá trị là cách IPAG vận hành để tạo ra giá trị đó — và cũng là bốn hướng nghề bạn có thể chọn. Mỗi chuỗi có một COE riêng, nuôi năng lực cho người đang làm trong chuỗi đó.",
      nhomNen: [
        {
          tieuDe: "Hai vai trong mỗi chuỗi",
          icon: "users",
          moTa: "Mỗi chuỗi có hai vai, không thay nhau: Head trục lo việc chạy, COE lead lo người lớn lên.",
          cards: [
            { ten: "Head trục", phuDe: "Giữ giá trị cho khách hàng", icon: "target", noiDung: "Giữ giá trị tạo ra cho khách hàng — lo việc chạy." },
            { ten: "COE lead", phuDe: "Giữ con người", icon: "user-round", noiDung: "Giữ con người — nuôi năng lực cho người đang làm trong chuỗi đó, lo người lớn lên." }
          ]
        },
        {
          tieuDe: "Một Ngân hàng Năng lực",
          icon: "database",
          moTa: "Bốn chuỗi giá trị không hoạt động tách rời. Tất cả cùng kết nối vào <strong>MỘT NGÂN HÀNG NĂNG LỰC (IPA Capability)</strong> — nơi năng lực được tích lũy, gìn giữ và chia sẻ cho toàn hệ sinh thái.<br><br>Khi qua cổng be-in và chọn một trong bốn hướng nghề, bạn không chỉ chọn việc mình làm — bạn còn bước vào một COE, nơi đồng hành nuôi dưỡng năng lực của bạn suốt sự nghiệp."
        }
      ],
      ketLuan: "Bốn chuỗi giá trị vận hành ngôi nhà. Nhưng để vận hành ấy thành công, cần năm nếp nghề — cách bạn sống và làm việc mỗi ngày. Đó là Nhịp Năm, nhé."
    },
    {
      icon: "recycle",
      tieuDe: "Năm — Năm nếp nghề của IPAGer",
      noiDung: "<em>Trà Việt · La Bàn · Soi Sáng · Gửi Trao · Trao Truyền.</em><br><br>Đây là năm bộ kỹ năng sống nghề, đi theo đúng thứ tự bạn sẽ trải qua — không phải năm khóa học rời rạc. Khi bạn biết mình đang gặt quả gì, bạn sẽ thấy rõ hơn vì sao nếp ấy đáng luyện.",
      nhomNenTieuDe: "Chi tiết từng nếp",
      nhomNen: [
        {
          tieuDe: "1. Nếp Trà Việt",
          phuDe: "Bạn · Bàn · Bày",
          icon: "coffee",
          moTa: "Làm Bạn trước khi Bàn việc, rồi Bày cùng nhau. Ba chữ B, ba tầng sâu:",
          cards: [
            { ten: "Bạn", phuDe: "Thấy tận gốc", icon: "search", noiDung: "Gặp được người, hiểu người từ gốc rễ." },
            { ten: "Bàn", phuDe: "Thông tận ngọn", icon: "messages-square", noiDung: "Hiểu nhu cầu, rủi ro và trải nghiệm của người ấy." },
            { ten: "Bày", phuDe: "Làm tận tâm", icon: "heart-handshake", noiDung: "Trình bày và làm việc với trái tim." }
          ],
          ketNhom: "Khi bạn ngồi lại và có mặt với người khác, việc gì cũng nói ra được, giải quyết được. Bàn trà không phân biệt cao thấp — ai cũng được lắng nghe, được thấy, được cảm thông."
        },
        {
          tieuDe: "2. Nếp La Bàn",
          phuDe: "IPAM Way",
          icon: "compass",
          moTa: "Đưa việc từ ý định tới lúc làm chủ, qua bốn kim: đích, việc, đội nhóm, đường đã đi. <strong>IPAM Way</strong> — phương pháp bên trong nếp này — bắt đầu bằng chữ NHÌN và kết thúc bằng chữ THẤY: có thể nhìn mà không thấy, nhưng không thể thấy mà chưa nhìn."
        },
        {
          tieuDe: "3. Nếp Soi Sáng",
          phuDe: "Tâm · Tầm · Trí",
          icon: "lightbulb",
          moTa: "Soi tâm, soi tầm, soi trí — không phải để bị phán xét, mà để chính bạn thấy mình rõ hơn. Ba khuôn để soi:",
          cards: [
            { ten: "SBI", phuDe: "Soi sự việc", icon: "clipboard-list", noiDung: "Kể lại sự việc, mô tả hành vi, rút ra cái thấy." },
            { ten: "TAC", phuDe: "Soi luồng việc", icon: "workflow", noiDung: "Chuyển hóa, nhân lên, tiếp nối." },
            { ten: "CAT", phuDe: "Soi người", icon: "heart", noiDung: "Trái tim dẫn, thêm giá trị, rồi trao lại." }
          ],
          ketNhom: "Đây cũng là nơi mười bốn chuẩn mực ứng xử được sống mỗi ngày."
        },
        {
          tieuDe: "4. Nếp Gửi Trao",
          phuDe: "Tứ Quy",
          icon: "send",
          moTa: "Làm ra khuôn mẫu để người khác dùng lại. Gửi vào Tứ Quy — bốn tầng chuẩn mực của ngôi nhà:",
          cards: [
            { ten: "Quy tắc", icon: "compass", noiDung: "Cái bất biến, kim chỉ nam." },
            { ten: "Quy chuẩn", icon: "book-open", noiDung: "Từ điển, bản đồ, chuẩn mực." },
            { ten: "Quy trình", icon: "list-ordered", noiDung: "Cách làm từng bước." },
            { ten: "Quy định", icon: "ruler", noiDung: "Điều phải giữ, con số cụ thể." }
          ],
          ketNhom: "Khi bạn tìm ra cách làm tốt, gửi lại cho hệ thống — để trở thành tài sản chung."
        },
        {
          tieuDe: "5. Nếp Trao Truyền",
          phuDe: "Dẫn · Dụng · Dưỡng",
          icon: "repeat",
          moTa: "Người đi trước kèm người sau, không làm hộ — soi cùng khi người mới làm sai. Trao cả lý do WHY, không chỉ cách làm HOW: người nhận được cách làm thì lặp lại máy móc, người nhận được lý do thì sửa được khi hoàn cảnh đổi."
        },
        {
          tieuDe: "Năm nếp nuôi nhau theo chu trình liên tục",
          icon: "recycle",
          moTa: "Năm nếp không đứng riêng lẻ, mà nuôi dưỡng lẫn nhau trong một chu trình không có điểm kết thúc:<span class=\"nhip-flow\">Trà Việt → Soi Sáng → Gửi Trao → La Bàn → Trao Truyền → <em>(quay lại)</em> Trà Việt</span>Mỗi nếp làm dày nếp kế tiếp: bạn gặp người (Trà Việt) rồi soi lại mình (Soi Sáng), từ đó gửi lại kinh nghiệm (Gửi Trao), dùng để làm việc có phương pháp (La Bàn), và kèm người đi sau (Trao Truyền) — rồi lại gặp người mới, chu trình tiếp diễn.<br><br>Còn năm lực — Tín, Tấn, Niệm, Định, Tuệ — chảy theo mạch tích lũy: lực này làm dày lực kia, không ai «học xong» một nếp rồi mới sang nếp khác. Cả năm nếp, bạn sẽ học và sống cùng lúc, suốt sự nghiệp.<span class=\"nhip-flow nhip-flow--accent\">Tín → Tấn → Niệm → Định → Tuệ = WISDOM (Trí tuệ)</span>Cả mạch năm lực gộp lại thành một chữ: Wisdom — chính là chữ Tuệ ở tầng G của Tháp Sự Nghiệp bạn gặp ở Nhịp Ba."
        }
      ],
      bangNep: [
        { nep: "Nếp Trà Việt",    tag: "Bạn · Bàn · Bày",    yNghia: "Gặp được người trước khi bàn được việc",  qua: "TÍN",  moc: "Có người mình dám hỏi khi chưa biết" },
        { nep: "Nếp La Bàn",      tag: "IPAM Way",           yNghia: "Đưa việc từ ý định tới làm chủ",          qua: "TẤN",  moc: "Làm được việc dài không cần ai nhắc, và biết lúc dừng" },
        { nep: "Nếp Soi Sáng",    tag: "Tâm · Tầm · Trí",    yNghia: "Soi việc và soi mình mà không phán xét",  qua: "NIỆM", moc: "Kể lại việc khó mà không lẫn phán xét vào lời kể" },
        { nep: "Nếp Gửi Trao",    tag: "Tứ Quy",             yNghia: "Làm ra khuôn mẫu để người khác dùng lại", qua: "ĐỊNH", moc: "Có thứ mình làm ra mà người khác dùng lại được" },
        { nep: "Nếp Trao Truyền", tag: "Dẫn · Dụng · Dưỡng", yNghia: "Người cũ kèm người mới, không làm hộ",    qua: "TUỆ",  moc: "Người mình kèm nay tự làm được, và kèm được người khác" }
      ],
      ketLuan: "Năm nếp ấy là vòng tròn mở rộng dần: một người, rồi một việc, rồi một chuỗi việc, rồi cả hệ, rồi đời sau. Và những nếp ấy sống trong những khu vườn cụ thể — Nhịp Sáu, nhé."
    },
    {
      icon: "sprout",
      tieuDe: "Sáu — Sáu vườn ươm",
      noiDung: "<em>Tích đức · Tích nghề · Tích tín.</em><br><br>IPAG có 6 lĩnh vực kinh doanh chính, gọi là 6 vườn ươm năng lực. Gọi là «vườn ươm» vì mỗi vườn không chỉ vận hành một mảng kinh doanh, mà còn nuôi dưỡng năng lực, phát triển giá trị mới và đóng góp vào mục tiêu chung của Tập đoàn. Mỗi vườn ươm có một sứ mệnh riêng:",
      moSan: true,
      hangTang: [
        { ten: "1. Tài chính bền vững", phuDe: "Vốn · chứng khoán · bảo hiểm", icon: "landmark", noiDung: "Ươm năng lực về vốn, chứng khoán và bảo hiểm cho người Việt." },
        { ten: "2. Sức khỏe & Đời sống", phuDe: "Cái ăn · cái ở · chất lượng sống", icon: "heart-pulse", noiDung: "Nuôi dưỡng cách sống thuận tự nhiên, chăm cái ăn, cái ở và chất lượng sống cho mỗi gia đình Việt." },
        { ten: "3. Công nghệ sinh học & Môi trường", phuDe: "Di sản thiên nhiên · tăng trưởng xanh", icon: "leaf", noiDung: "Gìn giữ di sản thiên nhiên, phát triển giải pháp sinh học và mở đường cho tăng trưởng xanh." },
        { ten: "4. Công nghệ số", phuDe: "Xương sống của hệ sinh thái", icon: "cpu", noiDung: "Xây dựng hạ tầng và giải pháp số, làm xương sống cho hoạt động của cả hệ sinh thái." },
        { ten: "5. Giáo dục & Đào tạo", phuDe: "Vun bồi con người", icon: "graduation-cap", noiDung: "Vun bồi con người, gieo tri thức và trao truyền năng lực cho thế hệ sau." },
        { ten: "6. Đầu tư ESG", phuDe: "Dòng vốn có trách nhiệm", icon: "sprout", noiDung: "Dẫn dòng vốn tới những giá trị bền vững, có trách nhiệm với môi trường và xã hội." }
      ],
      nhomNen: [
        {
          tieuDe: "Và người IPAG là ai giữa sáu vườn ươm ấy?",
          icon: "user-check",
          moTa: "Giữa sáu vườn ươm, mỗi người có thể làm ở lĩnh vực và chuyên môn khác nhau, nhưng cùng tham gia vào hai việc: giữ cho những gì đang có vận hành tốt hơn, và góp phần tạo ra giá trị mới cho tương lai.<br><br>Vì vậy, người IPAG không chỉ là nhân sự trong một tổ chức, mà là một <strong>nhà đầu tư gắn kết</strong>: đầu tư bằng thời gian, bằng nghề, bằng lòng tin và bằng sự nghiêm túc với ngôi nhà mình đang góp phần dựng xây.<br><br>Dù ở vườn ươm nào, người IPAG đều được kỳ vọng tích lũy ba điều:",
          cards: [
            { ten: "Tích đức", phuDe: "Giữ nhân cách và tâm thế đúng đắn", icon: "heart-handshake", noiDung: "Làm nghề chuẩn mực, giữ nhân cách và tâm thế đúng đắn." },
            { ten: "Tích nghề", phuDe: "Rèn chuyên môn vượt trội", icon: "wrench", noiDung: "Không ngừng nâng cao tay nghề, rèn luyện chuyên môn vượt trội." },
            { ten: "Tích tín", phuDe: "Xây uy tín bền vững", icon: "badge-check", noiDung: "Giữ chữ tín trong từng việc cụ thể, xây dựng uy tín bền vững." }
          ]
        }
      ],
      ketLuan: "Sáu vườn ươm khác nhau ở lĩnh vực và cách làm nghề, nhưng cùng chung một đích đến: <strong>Wellbeing cho cộng đồng người Việt</strong>."
    }
  ],
  // Câu chốt cuối module (mục KẾT trong bản "Nhịp đếm EPIC")
  ketModule: "Vậy là bạn đã đi hết sáu nhịp cùng mình. Trước khi gấp trang này lại, có một câu mình muốn bạn giữ theo: <strong>Nếp nhà là cái bạn bước vào; Nếp nghề là cái bạn được rèn luyện và mang theo.</strong> Sự nghiệp ở đâu cũng cần năm nếp ấy, nhưng nó chỉ thực sự phát huy trong một ngôi nhà có Tam Bảo — có Nền — có Nếp.<br><br><strong>Chào mừng bạn đến Ngôi nhà IPAG.</strong>"
};

// --- 2.0b. MODULE: CON NGƯỜI IPA (đầu nhóm "Hiểu IPAG") ---
// Nội dung theo file "update_con người IPA". Dùng chung engine renderNhipDem().
const conNguoiIPAContent = {
  tieuDe: "Con người IPA",
  moTa: "Trước khi đi vào kiến trúc của ngôi nhà, mình muốn kể với bạn về phần nền mà mọi thứ trong nhà này đều xây trên đó.<br><br>Đó là gia tài mỗi IPAGer được thừa hưởng khi bước vào IPA: <strong>Tam Bảo</strong> để quay về, <strong>Nền cội Trúc Lâm</strong> để sống nghề, và <strong>Nếp EPIC</strong> để làm việc cùng nhau.<br><br>Ba điều ấy không phải để học thuộc. Chúng giúp bạn trả lời những câu hỏi rất thật trong công việc hằng ngày: khi lạc hướng thì quay về đâu, khi không chắc đúng sai thì dựa vào chuẩn nào, khi đuối sức thì ai sẽ tiếp sức cho mình. Và quan trọng hơn cả: trong ngôi nhà này, <strong>bạn không đứng một mình</strong>.",
  cacPhan: [
    {
      icon: "gem",
      tieuDe: "I · Intention — Tam Bảo, và COL của chính bạn",
      noiDung: "<em>Có chủ đích: lấy con người làm trung tâm.</em><br><br>Khi một người làm việc có chủ đích, mọi thiết kế trong nhà đều cần quay về một câu hỏi gốc:<span class=\"nhip-flow\">Việc này phụng sự ai?</span>Ở IPA, câu hỏi ấy được giữ bằng <strong>Tam Bảo</strong> — ba báu vật mỗi người trong nhà được thừa hưởng, không phải ba giá trị treo tường.",
      nhomNen: [
        {
          tieuDe: "Tam Bảo — ba báu vật để quay về",
          icon: "gem",
          cards: [
            { ten: "COL — Center of Leadership", phuDe: "Lãnh đạo · Giữ chí hướng", icon: "crown", noiDung: "Điểm tựa định hướng khi bạn gặp khó khăn trong việc xác định mục tiêu dài hạn." },
            { ten: "COP — Center of Practice", phuDe: "Chuẩn mực tổ chức · Giữ chuẩn", icon: "scroll", noiDung: "Nơi cung cấp các tiêu chuẩn nghề nghiệp rõ ràng khi bạn hoang mang về mặt chuyên môn. Phương pháp làm nghề chuẩn mực — Bộ Tứ Quy: Quy tắc, Quy chuẩn, Quy trình, Quy định." },
            { ten: "COE — Center of Excellence", phuDe: "Đồng nghiệp · Giữ nhịp", icon: "users", noiDung: "Những đồng nghiệp đã đi qua đúng những gì bạn đang trải, luôn có mặt khi bạn cần soi lại việc mình làm. Cùng giúp bạn tái tạo năng lượng và giữ vững phong độ làm việc." }
          ],
          ketNhom: "Tam Bảo là nơi bạn quay về khi mọi thứ không suôn sẻ. <strong>Lạc đường</strong> — vẫn đi được mà không biết đi đâu, bạn về COL. <strong>Hoang mang</strong> — biết đích mà không biết bước nào đúng, bạn về COP. <strong>Đuối</strong> — biết cả hai mà hết sức, bạn về COE."
        },
        {
          tieuDe: "COL của bạn là ai?",
          icon: "users",
          moTa: "Tam Bảo không phải ba khái niệm treo tường. Với mỗi IPAGer, nó là một câu hỏi tra cứu được: <em>COL của tôi tại IPAG là ai?</em><br><br>Tại IPAG, bạn không đứng trên một chỗ, mà trên hai chiều song song — <strong>Chiều Con người</strong> (nơi năng lực của bạn được nuôi dưỡng lâu dài) và <strong>Chiều Công việc</strong> (nơi bạn làm việc và tạo giá trị mỗi ngày). Vì vậy, bạn cần bốn người chăm — hai người chăm NGƯỜI, hai người chăm VIỆC:",
          cards: [
            { ten: "COE Lead", phuDe: "Chăm người · Dưỡng", icon: "user-round", noiDung: "Chăm đường nghề của bạn: bạn đi tới đâu, bạn đang lớn lên thế nào." },
            { ten: "FD Lead", phuDe: "Chăm người · Dưỡng", icon: "graduation-cap", noiDung: "Chăm chuẩn nghề: làm thế nào là giỏi, làm thế nào là đúng chuẩn." },
            { ten: "FCM", phuDe: "Chăm việc · Dẫn", icon: "briefcase", noiDung: "Chăm việc đang chạy: chỗ đứng của bạn, việc bạn đang làm." },
            { ten: "OCM", phuDe: "Chăm việc · Dụng", icon: "sparkles", noiDung: "Chăm cơ hội mới: chỗ bạn được thử, được học thêm." }
          ],
          ketNhom: "<strong>Bốn người chăm không phải người phê duyệt — họ là người đỡ bạn.</strong><br>COL không phải người bạn cần xin phép trước khi làm việc gì. COL là người bạn tìm đến khi cần được soi, được hỏi, được trao đổi.<br><br>Và chính bạn cũng có một vai COL của mình: chí hướng ấy là đường nghề của chính bạn. <strong>COL không bắt đầu từ cấp quản lý — nó bắt đầu từ chính bạn.</strong>"
        }
      ]
    },
    {
      icon: "leaf",
      tieuDe: "P · Presence — Nền cội Trúc Lâm",
      noiDung: "<em>Có hiện diện: có mặt thật sự.</em><br><br>Có chủ đích rồi, người làm nghề cần có mặt thật sự để thực hiện chủ đích ấy. Nếp sống trong ngôi nhà này có gốc từ gia tài Trúc Lâm — dòng thiền đầu tiên do chính người Việt lập ra, nơi vua Trần Nhân Tông kết tinh ba dòng Đạo, Nho, Phật thành một mạch sống riêng của người Việt. Từ nền ấy, nhà mình giữ ba chữ: <strong>Sống ở đời · Vui với đạo · Thả tùy duyên.</strong>",
      moSan: true,
      hangTang: [
        { ten: "Sống đời", phuDe: "Rèn luyện ngay trong nghề", icon: "footprints", noiDung: "Cuộc đời làm nghề là một trải nghiệm giúp mỗi chúng ta được sống và rèn luyện ngay trong nghề. Chỗ khó nhất của nghề chính là cơ hội để khám phá bản thân và tự sửa mình. Thiếu chữ này, người ta phải đóng hai vai khác nhau — trong giờ làm, và ngoài giờ làm." },
        { ten: "Vui đạo", phuDe: "Vui khi làm việc", icon: "smile", noiDung: "Đạo là con đường sống nghề, phụng sự. Người làm nghề phải có khả năng vui khi làm việc, dù trong bất cứ hoàn cảnh nào. Thiếu chữ này, người ta chỉ làm với động cơ lợi ích — hết lợi ích thì hết niềm vui, hết cả ý chí vượt khó." },
        { ten: "Thả tùy duyên", phuDe: "Khế lý khế cơ", icon: "wind", noiDung: "Người làm nghề phải có tuệ giác để khế lý khế cơ. Nghịch duyên thì đổi cách, không đổi chuẩn mực. Tùy duyên ở cách — bất biến ở chuẩn mực và mục đích." }
      ],
      ketLuan: "Ba câu bạn có thể tự hỏi mình: Mình có đang được là chính mình, cả trong công việc lẫn trong cuộc sống, không? Tuần này có lúc nào mình vui vì chính việc mình làm không? Và việc này đang khó vì chưa đủ duyên, hay vì mình đang đi sai cách?"
    },
    {
      icon: "sparkles",
      tieuDe: "A · Awareness — Nếp EPIC",
      noiDung: "<em>Có tỉnh thức: thấy các mối tương quan.</em><br><br>Khi một người có chủ đích và có mặt đủ lâu, người ấy bắt đầu thấy rõ hơn: mình không làm việc một mình, và việc của mình không tách rời việc của người khác. Từ cái thấy ấy sinh ra Awareness — sự tỉnh thức về các mối tương quan.<br><br>Ở IPA, Awareness không chỉ là biết mình đang làm gì, mà còn là thấy việc mình làm đang chạm đến ai, ảnh hưởng đến đội nhóm nào, tạo ra giá trị gì, và để lại điều gì cho người sau. Từ ý thức ấy, Nếp EPIC được sống bằng bốn chữ Cùng:",
      moSan: true,
      hangTang: [
        { ten: "E — Empowering", phuDe: "Cùng trao quyền", icon: "key", noiDung: "Giao việc thì giao cả quyền quyết." },
        { ten: "P — People", phuDe: "Cùng tiếp sức", icon: "hand-heart", noiDung: "Thấy người bên cạnh đuối thì đỡ. Tiếp sức không phải làm hộ, mà là đỡ để người ta tự làm được." },
        { ten: "I — Impact", phuDe: "Cùng cộng tác", icon: "users-round", noiDung: "Làm cùng nhau là mặc định, làm một mình mới là ngoại lệ." },
        { ten: "C — Collaboration", phuDe: "Cùng tạo giá trị", icon: "gift", noiDung: "Đo bằng cái để lại, và cái để lại là của chung." }
      ]
    },
    {
      icon: "sun",
      tieuDe: "Môi trường IPA — Quả của Tam Bảo và Nếp EPIC",
      noiDung: "<em>Khi ba chữ được sống mỗi ngày.</em><br><br>Khi Tam Bảo giữ đúng chí hướng, chuẩn và nhịp, khi Nếp EPIC được sống trong từng việc nhỏ mỗi ngày, thì môi trường IPA được hình thành. Môi trường ấy có <strong>gắn kết</strong>, vì người ở lại thấy mình thuộc về. Có <strong>tin cậy</strong>, vì lời nói đi đôi với việc làm. Có <strong>cộng tác</strong>, vì làm cùng nhau là nếp sống, không phải khẩu hiệu.<span class=\"nhip-flow nhip-flow--accent\">ETC — Engage · Trust · Collaboration</span>ETC không đứng riêng. ETC là quả của cách nhà mình sống Tam Bảo và EPIC mỗi ngày.<br><br><strong>Có Tam Bảo, người không lạc hướng.<br>Có Trúc Lâm, người không rời mình.<br>Có EPIC, người không rời nhau.</strong>",
      ketLuan: "Ba chữ I·P·A làm nên Nếp Nhà: có chủ đích, có hiện diện, có tỉnh thức. Còn Nếp Nghề là phần bạn sẽ gặp ở Nhịp Năm — nơi năm nếp sống được rèn thành năm kỹ năng làm nghề. Và IPAG, sau cùng, là một dòng chảy: nhiều đời IPAGer cùng sống một nếp, cùng làm nghề, cùng trao truyền trí tuệ để người sau đi xa hơn người trước."
    }
  ],
  ketModule: "<strong>Nếp nhà là nơi bạn bước vào.<br>Nếp nghề là điều bạn rèn luyện.<br>Dòng chảy IPAG là điều chúng ta cùng gìn giữ và trao truyền.</strong>"
};

// --- 2.3b. MODULE: DẪN NHẬP (đầu menubar) ---
// Nội dung theo file "dẫn nhập". Render bằng renderDanNhapModule() (thiết kế riêng).
const danNhapContent = {
  tieuDe: "Dẫn nhập",
  moTaLead: "Mọi thiết kế về tổ chức và con người tại IPAG đều bắt nguồn từ một câu duy nhất:",
  cauLoi: "IPA là Nếp Nhà — IPAGer là Nếp Nghề — IPAG là dòng chảy trí tuệ của một tập thể tỉnh thức.",
  dienGiai: "Đây là nền tảng chuẩn mực văn hóa quản trị của IPAG — câu mà mọi thiết kế về tổ chức và con người đều bắt nguồn từ đó. Câu này bất biến, và mở đầu MỌI tài liệu ở mọi bộ. Lặp lại là có chủ ý.<br><br>Ba chữ trong câu ấy — <strong>I·P·A</strong> — đều chảy ra từ một điểm tựa duy nhất: <strong>Intention</strong> (phụng sự con người). Và ba chữ ấy tạo nên ba điều:<br>• <strong>Nếp Nhà</strong> giữ người<br>• <strong>Nếp Nghề</strong> giữ chuẩn<br>• <strong>Dòng chảy</strong> giữ tuệ",
  dienGiaiIPA: "Nếp nhà IPA được đọc bằng ba chữ <strong>I · P · A</strong> — và cả ba đều chảy ra từ một điểm tựa duy nhất.",
  diemTua: { nhan: "Intention", phuDe: "Lấy con người làm trung tâm — hướng tới phụng sự" },
  truCot: [
    {
      chu: "I", ten: "Intention", vietTat: "Lấy con người làm trung tâm",
      noiDung: "Điểm tựa gốc: lấy con người làm trung tâm, lấy khách hàng làm trung tâm, hướng tới phụng sự. Mọi thiết kế đều bắt đầu bằng một câu hỏi duy nhất: <em>«Điều này phụng sự ai?»</em> Vì I là điểm tựa chung, cả Tam Bảo đều quy về chữ này:",
      tamBao: [
        { ma: "COL", vt: "Lãnh đạo (Center of Leadership) giữ Chí hướng" },
        { ma: "COP", vt: "Chuẩn mực tổ chức (Center of Practice) giữ Chuẩn" },
        { ma: "COE", vt: "Đồng nghiệp (Center of Excellence) giữ Nhịp" }
      ]
    },
    {
      chu: "P", ten: "Presence", vietTat: "Có mặt thật sự",
      noiDung: "Có chủ đích rồi thì phải có mặt thật sự để thực hiện nó. IPAG lấy gốc từ <strong>Nền cội Trúc Lâm</strong> — triết lý tỉnh thức của người Việt — làm nền cho văn hóa và cách làm nghề trong nhà."
    },
    {
      chu: "A", ten: "Awareness", vietTat: "Ý thức tương tức",
      noiDung: "Có mặt đủ lâu thì bắt đầu thấy nhau — thấy rằng mình và người xung quanh không tách rời. Từ ý thức đó sinh ra <strong>Nếp EPIC</strong>: cùng trao quyền · cùng tiếp sức · cùng cộng tác · cùng tạo giá trị."
    }
  ],
  ketLuan: "<strong>Ba chữ ấy tạo nên gì?</strong><br>• I·P·A làm nên <strong>NẾP NHÀ</strong> — ngôi nhà bạn vừa bước vào.<br>• Năm nếp làm nên <strong>NẾP NGHỀ</strong> — điều bạn sẽ rèn và mang theo suốt sự nghiệp.<br>• Nhiều đời IPAGer cùng sống những nếp ấy làm nên <strong>IPAG</strong> — chữ G là <em>Generation</em>, dòng chảy trí tuệ xuyên thế hệ.<br><br>Từ hôm nay, bạn cũng là một phần trong dòng chảy ấy."
};

// --- 2.4. MODULE: LỘ TRÌNH 60 NGÀY ---
const loTrinhContent = {
  tieuDe: "Lộ trình 60 ngày hội nhập",
  moTa: "Ở IPAG, hội nhập không phải là quá trình làm quen với quy trình — mà là hành trình định vị bản sắc, xây dựng kết nối và tạo ra tác động thực. Mỗi người được nhìn nhận là một nguồn lực có trí tuệ, có năng lực tự thân — và lộ trình 60 ngày là không gian để bạn chứng minh điều đó.",
  giaiDoan: [
    {
      mocThoiGian: "Tuần 1",
      tieuDe: "Hiểu hệ sinh thái & Định vị vai trò",
      icon: "compass",
      mauNhan: "navy",
      moTaNgan: "Đặt nền móng — hiểu IPAG, hiểu vai trò, gặp đội ngũ.",
      hoatDong: [
        "Đọc trọn cuốn sổ tay hội nhập để tìm hiểu về hệ sinh thái IPAG và bức tranh chung trong giai đoạn hội nhập",
        "Tìm hiểu vai trò, phạm vi trách nhiệm (SOA – Span of Accountability) cùng với FCM",
        "Gặp gỡ và hoà nhập cùng đội ngũ trong la bàn Dlink (Dưới sự hỗ trợ của EPIC Partner - IC, Buddy, FCM)",
        "Xây dựng kế hoạch làm việc trong la bàn Dwork (theo các mốc 30-60 ngày) cùng FCM"
      ]
    },
    {
      mocThoiGian: "Tuần 2 – 4",
      tieuDe: "Hoà nhập & Định hình hành trình",
      icon: "users-round",
      mauNhan: "orange",
      moTaNgan: "Bắt đầu thực hành — hiểu sâu, kết nối, tạo output đầu tiên.",
      hoatDong: [
        "Tham gia các chương trình Company Onboarding, Job Onboarding để hiểu sâu về văn hoá tổ chức và xây dựng các kỹ năng làm việc nền tảng tại IPAG",
        "Tham gia chương trình On-job training, các cuộc mentor 1-1, coaching 1-1 cùng FD Head, FCM để hiểu sâu về hệ thống, quy trình nghiệp vụ, sản phẩm, và các yêu cầu năng lực liên quan đến vị trí công việc",
        "Bắt đầu thực hiện những nhiệm vụ đầu tiên trong la bàn Dwork đã thống nhất và tạo ra các output đầu tiên",
        "Thực hành Nền và Nếp của IPAG, thực hiện IPAX Reflect để nhận diện: điều gì đã rõ và điều gì còn cần hỗ trợ từ phía tổ chức (Dưới sự hỗ trợ của EPIC Partner - IC, Buddy, FCM)"
      ]
    },
    {
      mocThoiGian: "Tháng 2",
      tieuDe: "Tăng tốc & Ghi dấu",
      icon: "rocket",
      mauNhan: "steel",
      moTaNgan: "Tìm nhịp riêng — tối ưu hiệu suất, ghi dấu giá trị.",
      hoatDong: [
        "Tiếp tục thực hiện các nhiệm vụ FC trong la bàn Dwork theo kế hoạch đã được thống nhất",
        "Tham gia dự án OC khi được trao cơ hội",
        "Nhận diện 4 la bàn IPA Map sau 2 tháng hội nhập",
        "Thực hiện báo cáo hội nhập (Onboarding report) và xây dựng IDP (Individual Development Plan) cho giai đoạn tiếp theo",
      ]
    }
  ]
};

// --- 2.5. MODULE: QUY ĐỊNH NHÂN SỰ ---
// Schema mới: theoKhoi (optional, ở TRÊN) + chung (bắt buộc, ở DƯỚI).
// Hiện tại chưa có nội dung riêng theo SBU/Khối — chỉ dùng phần `chung`.
// Khi cần customize: thêm nội dung vào theoKhoi[SBU][khoi] = { tieuDe, dienGiai, cacMuc: [...] }
const quyDinhContent = {
  tieuDe: "Quy định nhân sự",
  moTa: "Để đảm bảo quyền lợi tối đa cho cá nhân và cùng nhau xây dựng một môi trường làm việc chuyên nghiệp, mọi thành viên mới cần đọc kỹ, nắm vững và tuân thủ các quy định nền tảng dưới đây:",

  // --- PHẦN RIÊNG THEO SBU × KHỐI ---
  // Chuẩn bị cho customize sau. Ví dụ pattern (chưa kích hoạt):
  // theoKhoi: {
  //   IPAG: {
  //     kinhDoanh: {
  //       tieuDe: "Quy định riêng Khối Kinh doanh IPAG",
  //       dienGiai: "Các quy định bổ sung dành riêng cho khối kinh doanh...",
  //       cacMuc: [ { icon, tieuDe, noiDung, linkNgoai } ]
  //     }
  //   }
  // }
  theoKhoi: {},

  // --- PHẦN CHUNG — áp dụng cho mọi SBU ---
  chung: {
    cacMuc: [
      {
        icon: "scroll-text",
        tieuDe: "Nội quy lao động",
        noiDung: "Văn bản pháp lý nền tảng quy định rõ ràng về quyền lợi, nghĩa vụ, kỷ luật lao động cũng như các hình thức khen thưởng tại công ty.",
        linkNgoai: {
          url: "https://kms.ipas.com.vn/post/noi-quy-lao-dong.5b654a75-9a9b-4ac1-a670-ea2143f0b6c2",
          tieuDeNut: "Truy cập tại đây"
        }
      },
      {
        icon: "building-2",
        tieuDe: "Quy định làm việc tại văn phòng",
        noiDung: "Hướng dẫn chi tiết về thời gian biểu, tác phong làm việc, văn hóa ứng xử nội bộ và trách nhiệm giữ gìn không gian làm việc chung.",
        linkNgoai: {
          url: "https://kms.ipas.com.vn/post/quy-dinh-lam-viec-tai-van-phong.a19e8b85-db16-443b-aaed-4eee50af6d02",
          tieuDeNut: "Truy cập tại đây"
        }
      },
      {
        icon: "gift",
        tieuDe: "Chính sách Đãi ngộ & Phúc lợi",
        noiDung: "Cẩm nang toàn diện về cơ chế tính lương – thưởng, lịch chi trả, các gói bảo hiểm sức khỏe, phụ cấp và các chế độ phúc lợi khác mà bạn được hưởng.",
        linkNgoai: {
          url: "https://kms.ipas.com.vn/folder/luong-thuong-va-phuc-loi",
          tieuDeNut: "Truy cập tại đây"
        }
      },
      {
        icon: "laptop",
        tieuDe: "Hướng dẫn sử dụng Phần mềm Nhân sự",
        noiDung: "Hệ thống quản lý thông tin nhân sự cốt lõi của mỗi Cán bộ Nhân viên (CBNV). Bạn cần truy cập vào hệ thống này để:<ul><li>Tra cứu, cập nhật thông tin cá nhân và thông tin gia đình.</li><li>Theo dõi thông tin hợp đồng lao động, quá trình công tác và lương.</li><li>Kiểm tra thời gian làm việc, quản lý ngày phép và thực hiện các thao tác đăng ký nghỉ phép, báo cáo công tác hoặc đăng ký làm thêm giờ (OT).</li></ul>",
        linkNgoai: {
          url: "https://kms.ipas.com.vn/post/phan-mem-bizzone_-he-thong-quan-ly-thong-tin-ca-nhan-cua-cbnv.3120bfff-49dc-474c-981f-ccd85ac14699",
          tieuDeNut: "Truy cập tại đây"
        }
      },
      {
        icon: "lock-keyhole",
        tieuDe: "Nguyên tắc bảo mật thông tin",
        noiDung: "Bộ nguyên tắc bắt buộc nhằm bảo mật thông tin nội bộ, dữ liệu khách hàng và tài sản số của doanh nghiệp, giúp CBNV nâng cao ý thức bảo an trong quá trình làm việc.",
        linkNgoai: {
          url: "https://dpolicy.ipam.vn/#/tim-kiem?referenceId=641c18879178057c673e7c4d&activeTab=1",
          tieuDeNut: "Truy cập tại đây"
        }
      }
    ]
  }
};

// --- 2.6. MODULE: MẠNG LƯỚI ĐỒNG HÀNH ---
const nguonLucContent = {
  tieuDe: "Mạng lưới đồng hành",
  moTa: "Ở Một Nhà, bạn có Tam Bảo — Lãnh đạo giỏi · Phương pháp hay · Đồng nghiệp tốt. Mạng lưới đồng hành chính là Tam Bảo ấy hiện ra thành người thật, việc thật quanh bạn — một bên đồng hành cùng bạn lớn lên, một bên đồng hành cùng bạn làm việc mỗi ngày.",
  // 4 vai trò luôn hiện dạng card
  vaiTroChinh: [
    {
      icon: "user-check",
      mauVien: "orange",
      tieuDe: "FD Head",
      phuDe: "Người giữ chuẩn nghề của bạn",
      noiDung: "Là người chịu trách nhiệm cho cả một miền nghề trong IPAG — không giao việc hằng ngày cho bạn, nhưng là người đặt ra chuẩn để đánh giá bạn đã giỏi nghề đến đâu, và mở lộ trình để bạn lên bậc. Khi bạn muốn biết mình cần học gì để tiến xa hơn trong nghề, đây là người có câu trả lời rõ nhất."
    },
    {
      icon: "user-round-plus",
      mauVien: "navy",
      tieuDe: "Buddy",
      phuDe: "Bạn đồng hành",
      noiDung: "Là đồng nghiệp cùng team hoặc cùng chuyên môn, đi cùng bạn những ngày đầu chưa quen việc, chưa quen người. Một Buddy tốt là người khiến bạn được nhớ — nhớ bạn đang vướng gì, đang cần hỏi gì; được hiểu — hiểu con người trước khi góp ý cách làm; và có mặt khi bạn khó, không để bạn tự xoay xở một mình.<br><br><em>Thông tin chi tiết đã được gửi tới bạn trong thư chào mừng.</em>"
    },
    {
      icon: "users",
      mauVien: "orange",
      tieuDe: "EPIC Partner (iLead Care Partner)",
      phuDe: "Cầu nối với nhân sự",
      noiDung: "Là người lắng nghe và gỡ giúp bạn những vướng mắc liên quan đến nhân sự — hợp đồng, chế độ, quy định. Cùng với FD Head và Buddy, EPIC Partner là một trong ba người đồng hành chiều trưởng thành của bạn.<br><br><em>Thông tin chi tiết đã được gửi tới bạn trong thư chào mừng.</em>"
    },
    {
      icon: "briefcase",
      mauVien: "navy",
      tieuDe: "FCM / OCM",
      phuDe: "Người giao và dẫn việc",
      noiDung: "Là người xác định công việc cụ thể của bạn mỗi ngày. Nếu công việc của bạn là việc thường xuyên trong một chuỗi giá trị, người dẫn dắt bạn là FCM (Functional Chain Manager). Nếu bạn tham gia một dự án có thời hạn, người dẫn dắt là OCM (Opportunity Chain Manager) — đồng hành cùng bạn đến ngày dự án về đích.<br><br><em>Thông tin chi tiết đã được gửi tới bạn trong thư chào mừng.</em>"
    }
  ],
  // Đầu mối khác — dạng accordion
  dauMoiKhac: {
    tieuDe: "Đầu mối hỗ trợ khác",
    danhSach: [
      {
        ma: "CnB",
        tenDayDu: "CnB (Compensation & Benefits)",
        moTa: "Phụ trách chế độ đãi ngộ, lương thưởng, bảo hiểm, phúc lợi cho nhân viên IPAG.",
        email: "(Đầu mối liên hệ theo SBU — vui lòng tham khảo Quản lý trực tiếp)",
        mauNhan: "navy"
      },
      {
        ma: "IP",
        tenDayDu: "IP (iLead Partner)",
        moTa: "Phụ trách Đào tạo và Phát triển năng lực.",
        // Đầu mối riêng theo SBU — engine tự lọc theo SBU đã chọn ở màn welcome.
        // Cách thêm/sửa: mỗi SBU là 1 mảng, mỗi người là 1 dòng { ten, email }.
        dauMoiTheoSBU: {
          IPAG:  [ { ten: "Ms Nga Đặng",       email: "nga.dang2@ipam.vn" } ],
          VNDS:  [ { ten: "Ms Mai Hoàng",      email: "mai.vuhoang@ipam.vn" },
                   { ten: "Ms Thu Hương",      email: "huong.nguyenthu13@ipam.vn" } ],
          PTI:   [ { ten: "Ms Trần Thu Hằng",  email: "hang.tranthu@ipam.vn" },
                   { ten: "Ms Phạm Hiếu Ngân", email: "ngan.phamhieu@ipam.vn" } ],
          IPAS:  [ { ten: "Ms Nga Đặng",       email: "nga.dang2@ipam.vn" } ],
          ANVIE: [ { ten: "Ms Hoàn Trần",      email: "hoan.tranthu@ipam.vn" } ]
        },
        // Dự phòng: hiện khi SBU chưa được khai báo ở trên
        email: "huong.nguyenthu13@ipam.vn",
        mauNhan: "orange"
      }
    ]
  },
  // Nền tảng — giữ như cũ
  nenTang: {
    tieuDe: "Hệ sinh thái Nền tảng (Platforms)",
    danhSach: [
      { icon: "monitor-play", tieuDe: "Elearning (LMS)", moTa: "Nền tảng học tập trực tuyến. Nơi bạn tham gia các khoá học theo lộ trình, theo dõi tiến độ và hoàn thành các bài đánh giá năng lực. <br><em>Lưu ý: LMS hiện chưa hỗ trợ trên điện thoại — vui lòng truy cập bằng máy tính.</em>",
        linkNgoai: { url: "https://id.ipas.com.vn/login?redirect-app=elearning-web", tieuDeNut: "Truy cập tại đây" },
        tieuDeDauMoi: "Đầu mối hỗ trợ kỹ thuật &amp; hệ thống LMS",
        dauMoiHoTro: [
          { ten: "Mr Nguyễn Sỹ Đắc",    email: "dac.nguyensy@ipam.vn" },
          { ten: "Ms Nguyễn Thu Hương", email: "huong.nguyenthu13@ipam.vn" }
        ] },
      { icon: "database",      tieuDe: "KMS",             moTa: "Kho tri thức tập đoàn (Knowledge Management System). Nơi lưu trữ, chia sẻ các tài liệu nghiệp vụ, thư viện số và bài viết chuyên môn từ chuyên gia IPAG.",
        linkNgoai: { url: "https://kms.ivnd.com.vn/", tieuDeNut: "Truy cập tại đây" } },
      { icon: "file-text",     tieuDe: "Dpolicy",         moTa: "Cổng tra cứu chính sách, quy trình, quy định nội bộ. Đảm bảo mọi hoạt động vận hành luôn tuân thủ đúng quy chuẩn của tập đoàn.",
        linkNgoai: { url: "https://dpolicy.ipam.vn/#/dang-nhap?targetUrl=%2F", tieuDeNut: "Truy cập tại đây" } },
      { icon: "check-square",  tieuDe: "iLead Platform",           moTa: "Hệ thống trình duyệt điện tử. Nơi bạn khởi tạo, đề xuất và phê duyệt các yêu cầu, tờ trình, hợp đồng thay cho giấy tờ truyền thống.",
        linkNgoai: { url: "https://ilead.ipam.vn/", tieuDeNut: "Truy cập tại đây" } }
    ]
  }
};

// --- 2.7. MODULE: TỪ ĐIỂN THUẬT NGỮ ---
// 2 nhóm: thuật ngữ + Pattern of Action (POA).
const glossaryData = {
  thuatNgu: [
    { term: "JT",   tenDayDu: "Job Track",                       def: "JT định nghĩa con đường phát triển sự nghiệp của một cá nhân theo các định hướng trong tổ chức, bao gồm:<br>- <strong>DC (Direct Client):</strong> đứng ở điểm tiếp xúc trực tiếp giữa tổ chức và khách hàng cuối; giá trị đến từ việc hiểu đúng nhu cầu KH và chuyển thành hành động cụ thể.<br>- <strong>PS (Professional Services):</strong> tạo giá trị qua việc thực thi dịch vụ đòi hỏi chuyên môn sâu, lấy chất lượng chuyên môn làm trung tâm.<br>- <strong>BA (Business Architecture):</strong> thiết kế và vận hành hạ tầng, chuẩn hoá hệ thống giúp kết nối chiến lược, quy trình, dữ liệu và công nghệ.<br>- <strong>CG (Capabilities Guardian):</strong> giữ gìn và nuôi năng lực 'sống' của tổ chức, bảo đảm vận hành minh bạch, hiệu quả và bền vững." },
    { term: "FD",   tenDayDu: "Functional Domain",               def: "Nhóm các chức năng, nhiệm vụ chuyên môn có liên quan chặt chẽ với nhau, áp dụng chung các nguyên tắc vận hành đặc thù để đạt được một mục tiêu cụ thể trong tổ chức." },
    { term: "FS",   tenDayDu: "Functional Specialty",            def: "Chuyên môn cụ thể nằm bên trong một FD, thể hiện độ chuyên sâu về kỹ thuật hay nghiệp vụ của cá nhân." },
    { term: "ICM",  tenDayDu: "Individual Competence Maturity",  def: "Chỉ số trưởng thành năng lực cá nhân — thước đo năng lực chuyên môn thực chiến của một cá nhân trong tổ chức. ICM là năng lực tích luỹ có chiều sâu, xây dựng qua thực hành và kiểm chứng qua kết quả. ICM gồm: SC và DC." },
    { term: "BMI",  tenDayDu: "Business Maturity Indicators",    def: "Đo lường mức độ trưởng thành hành vi của một cá nhân trong bối cảnh công việc thực tế." },
    { term: "EB",   tenDayDu: "Expected Behavior",               def: "Biểu hiện quan sát được của NỀN — mức độ một cá nhân thẩm thấu và sống theo các nguyên tắc của tổ chức thông qua các quyết định và hành vi thực tế hàng ngày." },
    { term: "PoA",  tenDayDu: "Pattern of Actions",              def: "Biểu hiện quan sát được của NẾP — các khuôn mẫu hành động và thực hành nhất quán của cá nhân, quan sát trong bối cảnh công việc thực tế qua thời gian." },
    { term: "SC",   tenDayDu: "Skill Competence",                def: "Năng lực Kỹ năng — kỹ năng thực thi đơn lẻ." },
    { term: "DC",   tenDayDu: "Delivery Competence",             def: "Năng lực đảm trách — khả năng chịu trách nhiệm toàn trình cho một nhiệm vụ cụ thể: từ Input → Process → Output và đảm bảo tiêu chuẩn chất lượng của kết quả cuối cùng." },
    { term: "FC",   tenDayDu: "Functional Chain",                def: "Không gian chuyên trách xử lý các nhiệm vụ vận hành thường xuyên, ổn định và diễn ra hàng ngày (BAU — Business As Usual), được thiết kế theo chuỗi giá trị (Value Chain): GTM → VCO → BIS → IPAG." },
    { term: "FCM",  tenDayDu: "FC Manager",                      def: "Chủ nhiệm một luồng nhiệm vụ cụ thể trong FC, đảm bảo toàn bộ quá trình điều phối, thực thi và chịu trách nhiệm cho kết quả cuối cùng." },
    { term: "KPI",  tenDayDu: "Key Performance Indicator",       def: "Chỉ số đo lường hiệu suất công việc của một cá nhân, thường sử dụng trong luồng nhiệm vụ FC." },
    { term: "OC",   tenDayDu: "Opportunity Chain",               def: "Không gian cho phép nhân sự tạo ra hoặc chủ động tham gia vào các dự án cải tiến, đổi mới, phát triển mang tính chiến lược và có thời hạn nhất định. OC là nơi nhân sự vượt ra khỏi phạm vi FC của mình để tạo ra các giá trị mới." },
    { term: "OCM",  tenDayDu: "OC Manager",                      def: "Chủ nhiệm một luồng nhiệm vụ cụ thể trong OC, chịu trách nhiệm dẫn dắt và đảm bảo kết quả cam kết." },
    { term: "OKR",  tenDayDu: "Objectives and Key Results",      def: "Hệ thống đo lường mức độ đóng góp của cá nhân qua các kết quả trọng yếu phục vụ mục tiêu, thường dùng trong các dự án OC.<br><strong>O</strong> (Objective): Mục tiêu — <strong>KR</strong> (Key Results): Kết quả then chốt đo được, chứng minh mục tiêu đã đạt." },
    { term: "R",    tenDayDu: "Responsible",                     def: "Vai trò mà người đảm trách trực tiếp thực thi nhiệm vụ, công việc và chịu trách nhiệm cho kết quả của bản thân. Một luồng nhiệm vụ có thể có nhiều R thực hiện các công việc khác nhau." },
    { term: "A",    tenDayDu: "Accountable",                     def: "Vai trò chủ nhiệm một luồng nhiệm vụ cụ thể, có trách nhiệm điều phối, triển khai trọn vẹn các công việc từ đầu đến cuối và đảm bảo kết quả đầu ra. Một nhiệm vụ chỉ có một A duy nhất." },
    { term: "DACI", tenDayDu: "Driver - Approver - Contributor - Informed", def: "Mô hình phân chia vai trò trong ra quyết định, dùng chủ yếu trong OC.<br>- <strong>D</strong> (Driver): Người dẫn dắt — thúc đẩy tiến trình ra quyết định. Một dự án chỉ có một D duy nhất.<br>- <strong>A</strong> (Approver): Người phê duyệt — quyết định cuối cùng. Một quyết định chỉ có một A duy nhất.<br>- <strong>C</strong> (Contributor): Người đóng góp — cung cấp thông tin và góc nhìn.<br>- <strong>I</strong> (Informed): Người được thông báo — cần biết quyết định nhưng không tham gia." },
    { term: "SOA",  tenDayDu: "Span of Accountability",          def: "Phạm vi nhiệm vụ cụ thể mà một cá nhân toàn quyền làm chủ và chịu trách nhiệm đầu ra trong chuỗi vận hành." },
    { term: "SOI",  tenDayDu: "Span of Influence",               def: "Nhóm liên quan trực tiếp đến luồng nhiệm vụ của bạn — có thể là bên phối hợp cộng tác hoặc chịu ảnh hưởng trực tiếp từ kết quả; thường là các bên trong cùng một chuỗi nhiệm vụ hoặc đầu mối liên quan." },
    { term: "SOC",  tenDayDu: "Span of Control",                 def: "Nguồn lực mà tổ chức cung cấp cho bạn để đảm nhiệm nhiệm vụ cụ thể — chính là working team mà bạn là chủ nhiệm (A), các thành viên khác đóng vai trò R." },
    { term: "SOS",  tenDayDu: "Span of Support",                 def: "Nguồn lực mà tổ chức cung cấp để hỗ trợ bạn khi thực hiện nhiệm vụ — nhóm này bao gồm FCM, OCM." },
    { term: "SM",   tenDayDu: "Servant Manager",                 def: "Lãnh đạo phụng sự — vai trò tập trung vào phát triển con người. SM tạo điều kiện để thúc đẩy người khác phát triển qua: khai phóng tư duy, xây dựng năng lực, điều phối nguồn lực hợp lý để phát huy hết tiềm năng của cá nhân và đội ngũ." },
    { term: "TM",   tenDayDu: "Technical Master",                def: "Chuyên gia ở cấp độ cao nhất trong một chuyên môn, lĩnh vực cụ thể. Không như SM tập trung vào phát triển con người, TM tập trung phát triển năng lực chuyên môn, đặc biệt với các lĩnh vực, nghiệp vụ đặc thù." }
  ],
  patternOfAction: [
    { term: "IPAM Way", def: "<strong>Identify (Nhận diện) → Plan (Kế hoạch) → Action (Hành động) → Mastery (Làm chủ)</strong><br><br>Nếp thực hành giúp đội ngũ xử lý các vấn đề một cách hệ thống — không chỉ xử lý biểu hiện bên ngoài, mà xác định đúng vấn đề, tìm nguyên nhân gốc rễ, lập kế hoạch hành động, thực hiện trong phạm vi trách nhiệm và rút bài học để tránh lặp lại. Người áp dụng IPAM Way sẽ không bị hoảng loạn hay tìm cách đổ lỗi khi có vấn đề xảy ra." },
    { term: "DIKW",     def: "Cấu trúc 4 tầng thông tin áp dụng trong mọi trao đổi, đề xuất, báo cáo:<br>- <strong>Data:</strong> dữ liệu đơn lẻ.<br>- <strong>Information:</strong> dữ liệu đã được xử lý và đặt trong bối cảnh cụ thể để thông tin có ý nghĩa.<br>- <strong>Knowledge:</strong> thông tin được tổng hợp, sàng lọc, phân tích để trở thành tri thức có giá trị cho tổ chức.<br>- <strong>Wisdom:</strong> tri thức được đóng gói và ứng dụng hiệu quả trong các giải pháp, quyết định vận hành, quản trị." },
    { term: "SBI 48h",  def: "<strong>Situation (tình huống cụ thể xảy ra) – Behavior (hành vi cụ thể đã thực hiện) – Impact (tác động thực tế của hành vi)</strong><br><br>Nếp thực hành giúp bản thân thực sự có mặt trong công việc để quan sát và ghi nhận trọn vẹn các khó khăn, vướng mắc, vấn đề gặp phải. SBI ghi nhận không phải để báo cáo mà nhằm 'thấy đúng', từ đó giải quyết vấn đề gặp phải — thời gian ghi nhận tối ưu nhất là trong vòng 48 giờ." },
    { term: "TAC",      def: "<strong>TAC Report</strong> là báo cáo vận hành hàng tuần của Functional Chain, giúp FC team nhìn lại chu kỳ công việc qua 3 chiều:<br>- <strong>T — Transform:</strong> chỉ ra điểm tắc nghẽn hoặc cách làm cũ đang cản trở hiệu quả, đề xuất hướng thay đổi.<br>- <strong>A — Amplify:</strong> nhận diện điểm tích cực, điểm mạnh chưa được củng cố; tổng hợp các SBI đủ điều kiện mở IPAM Session.<br>- <strong>C — Continue:</strong> ghi nhận nếp làm việc hiệu quả cần phát huy, đảm bảo tri thức được đóng gói và hệ thống hoá." },
    { term: "CAT",      def: "<strong>CAT Report</strong> là báo cáo theo lộ trình của OC, giúp đội ngũ ghi nhận đóng góp thực tế, duy trì sự đồng thuận và đóng gói tri thức trong suốt vòng đời dự án:<br>- <strong>C — Contribution:</strong> ai đã đóng góp gì, dựa trên OKR nào, output hoàn thành, cải tiến nổi bật.<br>- <strong>A — Alignment:</strong> kiểm tra mục tiêu dự án còn đúng hướng không, xử lý các vấn đề bị trì hoãn và các xung đột phát sinh.<br>- <strong>T — Transfer:</strong> đảm bảo tri thức được ghi nhận và đóng gói ngay trong kỳ, không chờ đến lúc dự án kết thúc mới chuyển giao." }
  ]
};
// Sắp xếp thuật ngữ A-Z
glossaryData.thuatNgu.sort((a, b) => a.term.localeCompare(b.term));

// --- 2.8. MODULE: FAQ ---
// Bộ FAQ tổng hợp (07/2026) — 6 nhóm, mỗi câu có q (câu hỏi) + a (câu trả lời).
const faqData = [
  {
    nhom: "Phần 1 — Tổng quan & Lộ trình đào tạo hội nhập",
    cacCau: [
      { q: "LMS là gì và vì sao tôi cần học trên LMS?", a: "LMS (Learning Management System) là hệ thống học tập trực tuyến chính thức của tổ chức, giúp CBNV học tập thuận tiện, được ghi nhận kết quả và gắn với lộ trình phát triển năng lực." },
      { q: "Khi nào tôi nhận được thông báo hướng dẫn về việc tham gia đào tạo Hội nhập?", a: "Trong ngày đầu tiên khi gia nhập, thông báo về hướng dẫn tham gia đào tạo Hội nhập sẽ được bộ phận Đào tạo gửi đến email nội bộ của bạn." },
      { q: "Việc học trên LMS có bắt buộc không?", a: "Có. Với các khóa học được phân công, CBNV cần hoàn thành đúng hạn theo yêu cầu đào tạo của đơn vị." },
      { q: "LMS có thay thế hoàn toàn lớp học truyền thống không?", a: "Không. LMS được sử dụng song song với đào tạo tập trung hoặc online, tùy từng chương trình." },
      { q: "Khóa học trên LMS được phân như thế nào và tôi cần tham gia bao nhiêu khóa trong thời gian hội nhập?", a: "Các khóa học được phân theo vị trí công việc, chương trình bắt buộc, lộ trình phát triển hoặc đăng ký tự chọn. Trong thời gian hội nhập, bạn cần hoàn thành các khóa học theo lộ trình sau:<ul><li><strong>Toàn bộ nhân viên mới:</strong> bắt buộc hoàn thành các khóa học trong lộ trình <em>Company Onboarding</em>.</li><li><strong>Nếu bạn thuộc khối Kinh doanh:</strong> bắt buộc hoàn thành thêm các khóa học trong lộ trình <em>Job Onboarding</em>.</li><li>Ngoài ra, sẽ có các khóa học phát sinh theo thời điểm và sẽ có thông báo gửi tới email của bạn.</li></ul>" },
      { q: "Tôi có thể tự chọn thêm khóa học để học không?", a: "Có. Ngoài khóa bắt buộc, bạn có thể đăng ký các khóa tự chọn trong thư viện học tập." },
      { q: "Kết quả học trên LMS được sử dụng để làm gì?", a: "Để ghi nhận kết quả quá trình đào tạo hội nhập, đánh giá năng lực và phục vụ phát triển nghề nghiệp cho CBNV." }
    ]
  },
  {
    nhom: "Phần 2 — Đăng nhập và quản lý tài khoản",
    cacCau: [
      { q: "Tôi đăng nhập hệ thống bằng cách nào và thông tin tài khoản là gì?", a: "<strong>Cách truy cập:</strong> vào đường link hệ thống E-learning (LMS): <a href='https://lms.ipam.vn/' target='_blank' rel='noopener'>https://lms.ipam.vn/</a><ul><li><strong>Tên đăng nhập:</strong> là user do công ty cấp. Quy tắc: luôn bắt đầu bằng <strong>pti\\</strong> (nếu CBNV thuộc Tổng Công ty Cổ phần Bảo hiểm Bưu điện) hoặc <strong>ipa\\</strong> (đối với CBNV thuộc các công ty khác). <em>Ví dụ: pti\\hoan.tran hoặc ipa\\huong.nguyenthu13</em>.</li><li><strong>Mật khẩu:</strong> là mật khẩu đăng nhập Email/Dlink công ty.</li></ul>" },
      { q: "Tôi quên mật khẩu hoặc không đăng nhập được thì làm sao?", a: "Bạn vui lòng chọn chức năng <strong>«Quên mật khẩu»</strong> tại màn hình đăng nhập hoặc liên hệ trực tiếp với bộ phận đào tạo/đầu mối quản trị hệ thống để được hỗ trợ cấp lại quyền truy cập." },
      { q: "Tôi có bắt buộc học bằng máy tính và mạng nội bộ tại công ty không? Có học bằng điện thoại được không?", a: "Không bắt buộc học tại công ty. Bạn hoàn toàn có thể học trên máy tính cá nhân/laptop và mạng wifi/3G/4G tại bất kỳ đâu. Bạn cũng có thể học bằng điện thoại di động, tuy nhiên học bằng máy tính/laptop sẽ ổn định và dễ thao tác hơn." },
      { q: "Tôi có thể dùng chung tài khoản với người khác không?", a: "Không. Mỗi tài khoản gắn liền với một CBNV duy nhất để ghi nhận kết quả học tập theo cá nhân đó." }
    ]
  },
  {
    nhom: "Phần 3 — Phương pháp học và tiến độ học tập",
    cacCau: [
      { q: "Tôi có cần học theo đúng thứ tự bài không?", a: "Tùy thuộc vào từng khóa học. Một số khóa học sẽ có yêu cầu bắt buộc học tuần tự từng bài thì mới được ghi nhận hoàn thành." },
      { q: "Tôi có thể học ngắt quãng hay phải học liên tục? Hệ thống có tự động lưu tiến độ không?", a: "Bạn hoàn toàn có thể học ngắt quãng, tạm dừng và quay lại học tiếp vào thời điểm khác. Hệ thống sẽ tự động lưu lại tiến độ học tập trước đó của bạn." },
      { q: "Làm thế nào để được tính là «Hoàn thành» một khóa học cụ thể?", a: "Bạn cần đảm bảo đồng thời <strong>02 điều kiện</strong> sau:<ul><li><strong>Xem hết/đủ nội dung bắt buộc:</strong> xem toàn bộ nội dung, không tua nhanh và không chuyển tab trong quá trình học. Hệ thống sẽ kiểm tra bất kỳ bằng câu hỏi <em>«Bạn có đang học không?»</em>. Nếu học viên không tương tác kịp trong <strong>5 giây</strong>, tiến độ học vừa rồi sẽ tự động bị hủy và hệ thống quay trở lại màn hình chính.</li><li><strong>Hoàn thành bài kiểm tra:</strong> làm các bài quiz và bài kiểm tra cuối khóa đạt từ <strong>80 điểm trở lên</strong>.</li></ul>" },
      { q: "Làm thế nào để được tính là tôi đã «Hoàn thành» các lộ trình đào tạo hội nhập?", a: "Bạn cần đảm bảo <strong>hoàn thành toàn bộ</strong> các khóa học thuộc lộ trình đã được gửi (ví dụ: hoàn thành hết các khóa trong Company Onboarding hoặc Job Onboarding)." },
      { q: "Tôi có được cấp chứng nhận sau khóa học không?", a: "Có. Đối với các khóa học đủ điều kiện và có thiết lập chứng nhận, bạn sẽ được nhận chứng nhận và lưu trữ trực tiếp trên hệ thống." },
      { q: "Tôi có thể xem lại bài học đã hoàn thành không?", a: "Có. Bạn có thể chủ động xem lại video và tài liệu học tập bất cứ lúc nào cần." }
    ]
  },
  {
    nhom: "Phần 4 — Xử lý lỗi và các trường hợp thường gặp",
    cacCau: [
      { q: "Nếu tôi đã làm hết số lần thi cho phép nhưng chưa đạt điểm tối thiểu để hoàn thành thì phải làm sao?", a: "Tùy thuộc vào quy định của từng khóa học, bạn có thể liên hệ đầu mối quản trị hệ thống/bộ phận phụ trách (và đưa ra giải trình hợp lý nếu có) để được hỗ trợ mở thêm số lần thi. Tuy nhiên, bạn nên học thật kỹ lại nội dung kiến thức trước khi làm lại bài thi." },
      { q: "Tôi thao tác sai trên hệ thống thì có ảnh hưởng đến kết quả không?", a: "Không. Bạn hoàn toàn có thể học lại và thực hiện thao tác lại theo đúng hướng dẫn." },
      { q: "Tôi gặp lỗi video không chạy hoặc bị giật/lag thì xử lý thế nào?", a: "Bạn hãy kiểm tra lại kết nối Internet, tiến hành tải lại trang (F5) hoặc thử đổi sang trình duyệt khác (hệ thống ưu tiên tối ưu trên Google Chrome)." },
      { q: "Tôi đã học xong rồi nhưng hệ thống không ghi nhận trạng thái hoàn thành?", a: "Bạn cần kiểm tra lại các yếu tố sau:<ul><li>Đã xem hết nội dung, không tua nhanh, không chuyển tab và đã phản hồi kịp thời (trong 5 giây) các câu hỏi kiểm tra bất ngờ của hệ thống trong lúc học.</li><li>Đã hoàn thành đầy đủ bài kiểm tra/quiz theo đúng điểm số yêu cầu (từ 80 điểm trở lên).</li></ul>" }
    ]
  },
  {
    nhom: "Phần 5 — Đầu mối liên hệ & hỗ trợ",
    cacCau: [
      { q: "Tôi có thể liên hệ đầu mối nào để được hỗ trợ vấn đề liên quan đến kỹ thuật và hệ thống LMS?", a: "Bạn có thể liên hệ bộ phận đào tạo, kênh hỗ trợ LMS được công bố trên hệ thống hoặc liên hệ trực tiếp các đầu mối quản trị hệ thống sau:<ul><li><strong>Mr Nguyễn Sỹ Đắc</strong> — dac.nguyensy@ipam.vn — 0985 511 164</li><li><strong>Ms Nguyễn Thu Hương</strong> — huong.nguyenthu13@ipam.vn — 0366 737 557</li></ul>" },
      { q: "Tôi có thể liên hệ đầu mối nào để hỏi thông tin về lộ trình và chuyên môn đào tạo hội nhập?", a: "Bạn vui lòng liên hệ đầu mối phụ trách theo SBU tương ứng:<ul><li><strong>Đơn vị PTI:</strong> Ms Phạm Hiếu Ngân — ngan.phamhieu@ipam.vn — 0963 278 246</li><li><strong>Các SBU còn lại:</strong> Ms Nguyễn Thu Hương — huong.nguyenthu13@ipam.vn — 0366 737 557</li></ul>" }
    ]
  },
  {
    nhom: "Phần 6 — Câu hỏi liên quan CnB (Chế độ & Phúc lợi)",
    cacCau: [
      { q: "Tôi có thắc mắc về hợp đồng lao động, bảo hiểm và lương thưởng thì liên hệ ai?", a: "Anh/Chị vui lòng liên hệ <strong>Bộ phận C&amp;B</strong> để được hỗ trợ các nội dung liên quan đến Hợp đồng lao động, tiền lương, thưởng, BHXH, BHYT, BHTN, thuế TNCN và các chế độ phúc lợi.<br><br>Ngoài ra, tham khảo các bộ phận khác tại <a href='https://kms.ipas.com.vn/post/danh-ba-dau-moi-ho-tro-doi-ngu.a02852dd-15de-4ef4-bfc9-8c5c11cdbe8f' target='_blank' rel='noopener'>Danh bạ đầu mối hỗ trợ đội ngũ</a>." },
      { q: "Thời gian làm việc chính thức tại công ty là từ mấy giờ?", a: "Thời gian làm việc thông thường:<ul><li><strong>Thứ Hai đến Thứ Sáu:</strong> từ 08h30 đến 17h30.</li><li><strong>Nghỉ giữa ca:</strong> từ 12h00 đến 13h00, không tính vào thời giờ làm việc.</li><li><strong>Sáng Thứ Bảy:</strong> làm việc khi có phát sinh và theo thông báo của Công ty/Đơn vị.</li></ul>Tùy theo tính chất công việc, một số vị trí hoặc đơn vị có thể áp dụng thời gian làm việc khác. Tuy nhiên, thời gian làm việc được bố trí theo quy định của Công ty, không quá 10 giờ/ngày và 44 giờ/tuần." },
      { q: "Trong thời gian thử việc tôi có được nghỉ phép không?", a: "Trong thời gian thử việc, Anh/Chị chưa được sử dụng ngày phép năm. Sau khi hoàn thành thử việc và ký Hợp đồng lao động chính thức với Công ty, Anh/Chị được sử dụng phép năm theo quy định; số ngày phép tương ứng với thời gian thử việc sẽ được ghi nhận bổ sung vào quỹ phép." },
      { q: "Quy trình đánh giá thử việc thực hiện trên hệ thống nào?", a: "Anh/Chị thực hiện quy trình đánh giá thử việc trên hệ thống <strong>iLead</strong> theo thông báo và hướng dẫn của Công ty.<br><br>Khi đến kỳ đánh giá, Anh/Chị cần chủ động hoàn thành nội dung tự đánh giá và phối hợp với Quản lý trực tiếp để hoàn tất quy trình đúng thời hạn." },
      { q: "Máy nhận diện khuôn mặt không nhận ra tôi, tôi phải báo cho ai?", a: "Anh/Chị vui lòng liên hệ <strong>Bộ phận C&amp;B</strong> để được kiểm tra và hỗ trợ cập nhật thông tin nhận diện khuôn mặt.<br><br>Ngoài ra, tham khảo các bộ phận khác tại <a href='https://kms.ipas.com.vn/post/danh-ba-dau-moi-ho-tro-doi-ngu.a02852dd-15de-4ef4-bfc9-8c5c11cdbe8f' target='_blank' rel='noopener'>Danh bạ đầu mối hỗ trợ đội ngũ</a>." },
      { q: "Ngày chi trả lương của công ty?", a: "Thực hiện chi trả lương theo kỳ thanh toán áp dụng với từng công ty, cụ thể:<ul><li>Ngày cuối cùng của tháng; hoặc</li><li>Ngày đầu tiên của tháng kế tiếp; hoặc</li><li>Ngày mùng 05 hằng tháng.</li></ul>Trong một số trường hợp, thời điểm chi trả có thể được điều chỉnh sớm hoặc muộn hơn theo kế hoạch thực tế của Công ty, nhưng không quá 07 ngày làm việc so với thời điểm chi trả theo quy định." },
      { q: "Nếu ngày đầu tiên đi làm tôi chưa kịp chuẩn bị hồ sơ nhân sự thì thời gian chậm nhất để nộp hồ sơ là khi nào?", a: "Trong trường hợp chưa có/chưa đầy đủ hồ sơ, Anh/Chị vui lòng hoàn thành trong vòng <strong>1 tuần làm việc</strong>.<br><br><strong>Đầu mối tiếp nhận hồ sơ:</strong> Bộ phận C&amp;B, VP 95 Trần Thái Tông, Cầu Giấy, Hà Nội." },
      { q: "Khi nào tôi được tham gia BHXH, BHYT, BHTN tại công ty?", a: "Sau khi hoàn thành thử việc và ký Hợp đồng lao động chính thức với Công ty, Anh/Chị được báo tăng tham gia BHXH, BHYT, BHTN theo quy định.<br><br>Ngoài ra, các chế độ phúc lợi khác Anh/Chị tham khảo tại: <a href='https://id.ipas.com.vn/login?redirect-app=kms' target='_blank' rel='noopener'>KMS — Kho tri thức tập đoàn</a>." },
      { q: "Nếu thông tin trên hợp đồng lao động bị sai, tôi cần liên hệ ai để điều chỉnh?", a: "Anh/Chị vui lòng liên hệ <strong>Bộ phận C&amp;B</strong> để được kiểm tra và hỗ trợ cập nhật thông tin." }
    ]
  }
];


/* =============================================================================
   PHẦN 3: NỘI DUNG MODULE THEO SBU
   ============================================================================= */

// --- 3.1. MODULE ĐÀO TẠO ---
const daoTaoData = {
  intro: {
    tieuDe: "Chương trình đào tạo hội nhập",
    moTa: "Toàn bộ khoá học Onboarding được đồng bộ từ lộ trình chuẩn. Click vào nút <em>Tới lớp học LMS</em> để hệ thống tự động chuyển hướng sang LMS.",
    luuY: "Hệ thống LMS hiện chưa hỗ trợ học trên điện thoại. Bạn vui lòng mở các khoá học bằng <strong>máy tính / laptop</strong> để đảm bảo quá trình học và kết quả được ghi nhận đầy đủ.",
    mucTieu: "Trang bị cho bạn kiến thức nền tảng về IPAG Group, văn hoá tập đoàn, hệ sinh thái sản phẩm và kỹ năng nghiệp vụ.",
    quyDinh: "Hoàn thành đầy đủ tất cả khoá học trong lộ trình đào tạo là một trong những điều kiện để được xác nhận đạt yêu cầu thử việc."
  },

  // Company Onboarding — schema: chung (mọi SBU) + theoSBU (khoá bổ sung riêng)
  // Cách thêm khoá riêng cho 1 SBU: thêm key SBU vào theoSBU với mảng khoá học.
  companyOnboarding: {
    // Khoá học áp dụng cho MỌI SBU
    chung: [
      { ten: "SAS - An ninh, Tuân thủ & Giám sát", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/0df99e1a-8c1c-428b-9bd2-f464e397dabc", batBuoc: true },
      { ten: "Code of conduct_V2", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/650f453a-589e-4d3a-beba-ba8080392e5a", batBuoc: true },
      { ten: "Nhận thức An ninh thông tin", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/2b1fdadd-f439-4215-afe4-842f955d09e5", batBuoc: true },
      { ten: "IPAG Company profile", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/564d0b72-ce29-4a85-9788-0c4551abb60a", batBuoc: true },
      { ten: "IPAG Compass - La bàn sự nghiệp T6.2026", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/a419ddc9-b38d-4c39-b49a-47d533c71e92", batBuoc: true }
    ],
    // Khoá bổ sung riêng theo SBU — hiển thị NGAY SAU danh sách chung
    theoSBU: {
      VNDS: [
        { ten: "Thông tin chung về VNDS", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/54e6eb9c-241a-4e5f-98a1-f900374cd7f2", batBuoc: true }
      ],
      PTI: [
        { ten: "Thông tin chung về PTI", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/c9b1bdfd-dda5-48de-b506-925aec69cecb", batBuoc: true }
      ]
      // IPAG, IPAS, ANVIE: chưa có khoá bổ sung riêng -> chỉ hiện danh sách chung
    }
  },

  // Job Onboarding — TẠM THỜI ĐỂ TRỐNG cho mọi SBU/khối.
  // Engine tự hiển thị uiText.daoTaoEmptyJob khi không có khoá học.
  // Khi có nội dung: thêm lại theo mẫu theoKhoi[SBU][khoi] = [ { ten, moTa, lmsUrl, batBuoc } ]
  jobOnboarding: {
    theoKhoi: {}
  }
};


/* =============================================================================
   PHẦN 4: TIPS / MẸO THEO MODULE
   ============================================================================= */
const globalTips = {
  'ipag-la-ai': {
    tieuDe: "Đọc theo Nhịp Đếm — không cần thuộc lòng",
    noiDung: "Module này có 6 nhịp: **Một nhà · Hai nền tảng năng lực · Ba tầng HWG · Bốn chuỗi giá trị · Năm nếp nhà · Sáu vườn ươm** — không cần đọc hết trong 1 lần.\n\n1. **Lượt 1:** đọc nhịp *Một* để hiểu ngôi nhà: Tam Bảo nuôi dưỡng, Nền chuẩn mực và Nếp sống hằng ngày.\n2. **Lượt 2:** đọc *Hai* + *Ba* khi bạn bắt đầu làm việc với các đơn vị khác trong hệ sinh thái.\n3. **Lượt 3:** đọc *Bốn* + *Năm* + *Sáu* song song với chương trình đào tạo hội nhập.\n\nMẹo: tap vào từng nhịp để mở/đóng — chỉ cần bắt đầu từ Một."
  },
  'vai-tro': {
    tieuDe: "Bạn không phải cấp dưới — bạn là một nguồn lực",
    noiDung: "Bốn nguyên lý ở module này không phải lời slogan. Đây là cách IPAG thực sự đối xử với từng cá nhân.\n\n- Khi bạn được giao một việc → đó là **trao quyền**, không phải chỉ thị.\n- Khi bạn báo cáo → tập trung vào **tác động** (impact), không phải số giờ bỏ ra.\n- Khi bạn thấy điều gì chưa đúng → bạn có **trách nhiệm** lên tiếng."
  },
  'epic': {
    tieuDe: "Đọc EPIC theo Nhịp Đếm — không cần thuộc lòng",
    noiDung: "Module này có 6 nhịp: **Một ngôi nhà · Hai năng lực · Ba tầng HWG · Bốn chuỗi · Năm nếp nghề · Sáu vườn ươm** — cứ bắt đầu từ Một, không cần đọc hết trong 1 lần.\n\n1. **Lượt 1:** đọc nhịp *Một* để cảm ngôi nhà — Tam Bảo, Nền cội Trúc Lâm và Nếp EPIC.\n2. **Lượt 2:** đọc *Hai* + *Ba* khi bạn bắt đầu hình dung con đường sự nghiệp của mình.\n3. **Lượt 3:** đọc *Bốn* + *Năm* + *Sáu* song song với chương trình đào tạo hội nhập.\n\nMẹo: mỗi khi gặp tình huống khó, tự hỏi — *điều này có tạo ra tác động thật không? có cùng làm với người khác không?*"
  },
  'lo-trinh': {
    tieuDe: "Mẹo vượt qua 60 ngày hội nhập xuất sắc",
    noiDung: "1. **Chủ động:** Đừng đợi Quản lý giao việc. Hãy hỏi 'Em có thể hỗ trợ gì thêm không?'.\n2. **Ghi chép:** Luôn mang theo sổ tay trong các buổi hướng dẫn — áp dụng SBI 48h: ghi lại tình huống, hành vi, tác động trong 48 giờ.\n3. **Báo cáo định kỳ:** Tự tóm tắt những gì học được vào cuối mỗi tuần và gửi nhanh cho Buddy / FD Head.\n4. **Tham gia IPAC Reflect:** đây là nơi bạn nhận diện điều gì đã rõ và điều gì còn cần hỗ trợ."
  },
  'dao-tao': {
    tieuDe: "Cách tự kiểm tra tiến độ LMS",
    noiDung: "Sau khi học xong một khoá trên LMS, bạn nên tự kiểm tra xem khoá đã được tính hoàn thành chưa thay vì chờ thông báo.\n\n1. Vào khoá học bất kỳ trên LMS\n2. Chọn tab **Kết quả học tập**\n3. Kiểm tra cột trạng thái của các phần **Bắt buộc**.",
    anh: "images/chung/huong-dan-lms-v2.jpg"
  },
  'quy-dinh': {
    tieuDe: "Lưu ý sống còn về Bảo mật",
    noiDung: "Thói quen nhỏ, lợi ích lớn:\n- Luôn bấm **Windows + L** để khoá màn hình mỗi khi rời khỏi chỗ ngồi (dù chỉ đi lấy nước).\n- Không chụp ảnh màn hình chứa dữ liệu nội bộ gửi qua Zalo / Facebook cá nhân.\n- Không cài phần mềm lạ — mọi yêu cầu cài đặt phải qua IT Service Desk."
  },
  'nguon-luc': {
    tieuDe: "Nguyên tắc 'Hỏi đúng người'",
    noiDung: "- Chuyên môn, KPI, OKR công việc → Hỏi **FD Head**.\n- Văn hoá team, công cụ làm việc, mẹo hoà nhập → Hỏi **Buddy**.\n- Hợp đồng, lương, bảo hiểm, chế độ → Hỏi **EPIC Partner / CnB**.\n- Lỗi kỹ thuật LMS → **Mr Nguyễn Sỹ Đắc** (dac.nguyensy@ipam.vn) hoặc **Ms Nguyễn Thu Hương** (huong.nguyenthu13@ipam.vn).\n- Lộ trình đào tạo hội nhập → PTI: **Ms Phạm Hiếu Ngân** (ngan.phamhieu@ipam.vn); SBU khác: **Ms Nguyễn Thu Hương**.\n- Quy trình, sản phẩm, nhiệm vụ Dwork → Hỏi **FC / OC Manager**."
  },
  'glossary': {
    tieuDe: "Cách dùng từ điển hiệu quả",
    noiDung: "Từ điển có 2 phần:\n- **Thuật ngữ:** các từ viết tắt chuyên môn (FD, FS, ICM, BMI, SOA...).\n- **Pattern of Action (POA):** các nếp thực hành (IPAM Way, DIKW, SBI 48h, TAC, CAT).\n\nMẹo: gõ vào ô tìm kiếm phần đầu của từ (vd: 'SOA') để nhảy thẳng tới nơi cần. Không cần nhớ chính xác cả từ."
  },
  'faq': {
    tieuDe: "Cách tìm câu trả lời nhanh",
    noiDung: "FAQ chia làm 6 phần theo chủ đề.\n\n- Gõ vào ô tìm kiếm để lọc câu hỏi theo từ khoá (vd: 'LMS', 'mật khẩu', 'nghỉ phép').\n- Kỹ thuật & hệ thống LMS: **Mr Nguyễn Sỹ Đắc** — dac.nguyensy@ipam.vn — 0985 511 164, hoặc **Ms Nguyễn Thu Hương** — huong.nguyenthu13@ipam.vn — 0366 737 557.\n- Lộ trình đào tạo hội nhập: PTI — **Ms Phạm Hiếu Ngân**; các SBU còn lại — **Ms Nguyễn Thu Hương**.\n- Chế độ, hợp đồng, lương thưởng → **Bộ phận C&B / EPIC Partner**."
  }
};
