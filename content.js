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
  IPAG:  { tenDayDu: "IPAG",  khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "Khối Back office" } },
  VNDS:  { tenDayDu: "VNDIRECT",       khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "Khối Back office" } },
  PTI:   { tenDayDu: "PTI",            khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "Khối Back office" } },
  //IPAM:  { tenDayDu: "IPAM",           khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "Khối Back office" } },
  IPAS: { tenDayDu: "IPAS", khoiMacDinh: "backOffice", khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "Khối Back office" } },
  ANVIE: { tenDayDu: "ANVIE",          khoi: { kinhDoanh: "Khối Kinh doanh", sanXuat: "Khối Sản xuất", vanHanh: "Khối Vận hành" } }
};

// --- 1.2. CẤU TRÚC MENU SIDEBAR ---
// Đổi thứ tự / đổi tên / thêm module mới ngay tại đây.
const menuConfig = [
  {
    nhom: "Hiểu IPAG",
    cacMuc: [
      { id: "ipag-la-ai",     ten: "IPAG là ai?",          icon: "compass" },
      { id: "vai-tro",        ten: "Vai trò của bạn",      icon: "user-cog" },
      { id: "epic",           ten: "Văn hoá EPIC",         icon: "sparkles" }
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
  obStep1Title:      "Bạn thuộc đơn vị nào?",
  obStep2Title:      "Bạn thuộc khối nào trong",
  obBackButton:      "Quay lại chọn đơn vị",
  // Header
  headerContextLabel:"Bạn đang xem:",
  headerChangeBtn:   "Thay đổi",
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
  loiChao: "Bạn vừa gia nhập một tổ chức được kiến tạo qua gần 30 năm — không phải để trở thành một tập đoàn lớn hơn, mà để trở thành một tổ chức làm nghề tử tế và bền vững hơn. Ở đây, mỗi người được nhìn nhận là một nguồn lực có trí tuệ, có năng lực tự thân, và có khả năng phát triển cùng tập thể.",
  // Đoạn mô tả handbook — gộp đoạn 2 và 3 từ spec
  moTa: "Cuốn sổ tay hội nhập sẽ giúp bạn hiểu IPAG là ai, vì sao chúng tôi tồn tại, và bạn đứng ở đâu trong bức tranh chung. Hãy đọc thong thả. Những điều quan trọng nhất ở IPAG không nằm ở quy trình, mà ở cách chúng tôi nhìn về con người, về giá trị, và về hành trình dài phía trước.",
  // Câu footer
  huongDan: "Hệ sinh thái Wellbeing Việt Nam · Vận hành theo mô hình Ngân hàng Năng lực",
  // Box Thư Chủ tịch trên welcome screen.
  // Thay thư mới: export ảnh mới vào images/chung/, cập nhật đường dẫn trong `anh`.
  // Muốn ẩn box: đổi hienThi thành false.
  thuChuTich: {
    hienThi: true,
    tieuDe: "Thư từ Chủ tịch gửi người bạn mới của IPA Group",
    moTa: "Trước khi bắt đầu, hãy dành ít phút đọc bức thư Chủ tịch Phạm Minh Hương gửi người bạn mới.",
    nutMo: "Đọc thư",
    ghiChu: "Tap vào trang thư để mở bản đầy đủ (phóng to / thu nhỏ trực tiếp).",
    anh: [
      "images/chung/thu-chu-tich-p1.png",
      "images/chung/thu-chu-tich-p2.png"
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
  moTa: "Chào mừng bạn đến với IPAG.<br><br>Ngày đầu bước vào một tổ chức mới, điều chúng ta thường cần nhất không chỉ là biết mình ngồi ở đâu, báo cáo cho ai, hay dùng hệ thống nào. Điều quan trọng hơn là hiểu: mình đang bước vào một ngôi nhà như thế nào, nơi này tin vào điều gì, và mình sẽ lớn lên cùng tổ chức ra sao.<br><br>Ở IPAG, chúng ta có một cách rất giản dị để bắt đầu hành trình ấy — đó là <strong>Nhịp Đếm IPAG</strong>. Nhịp đếm này không phải để học thuộc lòng. Nó là một bản đồ ngắn, giúp mỗi cán bộ nhân viên mới hiểu IPAG từ tổng thể cho đến đời sống làm việc hằng ngày, theo sáu nhịp thật tự nhiên:<br><strong>Một ngôi nhà · Hai nền tảng · Ba tầng · Bốn la bàn · Năm nếp nhà · Sáu vườn ươm.</strong><br><br>Hãy để sáu nhịp đó dẫn bạn đi — không vội, không áp lực. Chỉ cần bắt đầu từ Một.",
  // 4 con số nổi bật ở hero card đầu module
  conSo: [
    { soLieu: "Gần 30", nhan: "Năm kiến tạo",       icon: "calendar-clock" },
    { soLieu: "35+",    nhan: "Công ty thành viên", icon: "building" },
    { soLieu: "7.000+", nhan: "Cán bộ nhân viên",   icon: "users" },
    { soLieu: "6",      nhan: "Vườn ươm",           icon: "sprout" }
  ],
  // 6 nhịp dạng accordion
  cacPhan: [
    {
      icon: "home",
      tieuDe: "Một — Một nhà IPAG: Hệ sinh thái Wellbeing & Văn hoá quản trị EPIC",
      noiDung: "Có một câu hỏi đã đi cùng IPA Group gần 30 năm: điều gì đáng để tích lũy? Không phải doanh thu quý này, không phải một danh mục công ty — mà là năng lực và gia tài trí tuệ Việt, được tích lũy để phụng sự một cách sống. Cách sống ấy gọi bằng một chữ: <strong>Wellbeing</strong>. Và câu trả lời đó làm nên hình hài của hệ sinh thái hôm nay — không phải một tập đoàn đa ngành thông thường, mà là một ngôi nhà được xây để người trong nhà sống tốt hơn, và lan tỏa điều đó ra ngoài xã hội.<br><br><strong>IPA Group (HNX: IPA) là hệ sinh thái Wellbeing của Việt Nam</strong> — gần 30 năm kiến tạo trên ba dòng chảy: tài chính, bảo hiểm và đời sống. IPAG là mái nhà chung của hơn 35 công ty thành viên, hơn 7.000 con người, cùng theo đuổi một tầm nhìn và phụng sự một sứ mệnh giản dị mà sâu sắc:<br><br><strong>TẦM NHÌN</strong><br>Một Việt Nam Wellbeing — nơi sống tỉnh thức là nền, sống trọn vẹn là nếp: người người sống khỏe, nhà nhà sống giàu, cộng đồng sống vui — bắt đầu từ những lựa chọn nhỏ mỗi ngày.<br><br><strong>SỨ MỆNH</strong><br>Kết nối, gìn giữ và trao truyền gia tài trí tuệ Việt — vun bồi Wellbeing cho mỗi người, mỗi gia đình và mỗi tổ chức.",
      // IPAG Way — giữ nguyên nội dung hiện hành
      ipagWay: [
        { chu: "I", tieuDe: "Insight & Integration", phuDe: "Thấu hiểu và Tích hợp", noiDung: "Trí tuệ thấu hiểu là nền tảng của tích hợp. Chúng tôi hiểu sâu doanh nghiệp, thị trường và cộng đồng trước khi kết nối các năng lực rời rạc thành sức mạnh tổng hợp. Với bạn: hiểu trước khi hành động, lắng nghe trước khi đề xuất." },
        { chu: "P", tieuDe: "Pathway & Partnership", phuDe: "Định hướng và Đồng hành", noiDung: "Với định hướng của một tầm nhìn dài hạn, chúng tôi đồng hành theo toàn trình của chặng đường phát triển, không chỉ phục vụ theo từng giao dịch đơn lẻ. Đội ngũ IPAG thực hành và thực chứng nếp sống tỉnh thức trước khi chia sẻ giải pháp với cộng đồng." },
        { chu: "A", tieuDe: "Action & Accountability", phuDe: "Hành động và Trách nhiệm", noiDung: "Hành động và trách nhiệm là hai mặt không thể tách rời. Ở IPAG, thẩm quyền luôn đi cùng trách nhiệm — không có thẩm quyền mà không có trách nhiệm, không có trách nhiệm mà không có thẩm quyền. Chúng tôi đo giá trị của mình bằng tác động tạo ra, không bằng nỗ lực bỏ ra." },
        { chu: "G", tieuDe: "Greatness & Generation", phuDe: "Vượt trội và Xuyên thế hệ", noiDung: "Sự vượt trội có ý nghĩa khi nó xuyên thế hệ. Chúng tôi theo đuổi sự xuất sắc trong từng việc làm vì mục tiêu để lại di sản cho thế hệ sau — vì giá trị bền vững cho tương lai của người Việt, không vì sự công nhận của hiện tại." }
      ]
    },
    {
      icon: "layers",
      tieuDe: "Hai — Hai nền tảng: IPAG Capability và IPA Living",
      noiDung: "Hệ vận hành trên hai nền tảng: <strong>IPA Capability</strong> là nền — nơi năng lực được tích lũy theo mô hình Ngân hàng Năng lực; và <strong>IPA Living</strong> là nếp — nơi nếp sống được trải vào đời thường qua ba nếp Sống Khỏe · Sống Giàu · Sống Vui.",
      nhomNen: [
        {
          tieuDe: "IPAG Capability — nơi năng lực được tích lũy",
          cards: [
            { ten: "IPA Solution",   phuDe: "Hạ tầng Công nghệ Số",          icon: "monitor",     noiDung: "Hơn 700 chuyên gia phần mềm và dữ liệu, vận hành công nghệ cho toàn hệ sinh thái và kết nối số giữa doanh nghiệp, nhà đầu tư và cộng đồng." },
            { ten: "IPA Management", phuDe: "Hạ tầng Quản trị Doanh nghiệp", icon: "briefcase",   noiDung: "Đồng hành các công ty trong portfolio sau đầu tư: tái cấu trúc quản trị theo chuẩn niêm yết, chuẩn hoá vận hành, tích hợp vào chuỗi giá trị hệ sinh thái." },
            { ten: "IPA Partners",   phuDe: "Hạ tầng Đầu tư",                icon: "trending-up", noiDung: "Công ty quản lý quỹ được cấp phép UBCKNN, kết nối dòng vốn từ cộng đồng nhà đầu tư đến chuỗi giá trị hệ sinh thái qua ba giải pháp: Quỹ Đầu tư Tư nhân, Quỹ Hưu Trí Tự Nguyện và Dịch vụ Tín thác." }
          ]
        },
        {
          tieuDe: "IPA Living — nơi gia tài được sống",
          cards: [
            { ten: "IPA Living", phuDe: "Nền tảng đời sống", icon: "leaf", noiDung: "Ba nếp <strong>Sống Khỏe · Sống Giàu · Sống Vui</strong> đi vào đời thường qua cụm sản phẩm/giải pháp về sức khỏe (Anvie), cụm giải pháp/sản phẩm tài chính – bảo an (VNDIRECT và PTI), và ba cộng đồng cùng thuộc về nếp Sống Vui: Cộng đồng Sống Khỏe của AnVie Life, Cộng đồng Sống Giàu của VNDGO, Cộng đồng Sống An của PTICare." }
          ]
        }
      ],
      ketLuan: "Hai nền tảng — một dòng chảy: năng lực đi từ nơi được tích lũy đến nơi đời sống cần."
    },
    {
      icon: "mountain",
      tieuDe: "Ba — Ba tầng HWG",
      noiDung: "HWG là ba tầng của một hành trình sống trọn vẹn: <strong>Health — Wealth — Grow</strong>, và đó chính là ba nếp mà IPAG vun bồi cho mỗi người, mỗi gia đình: đi từ Sống Khỏe, lên Sống Giàu, tới đỉnh Sống Vui.<br><br>Trong một hệ sinh thái rộng lớn với hơn 35 công ty thành viên, hơn 7.000 con người và hàng chục sản phẩm dịch vụ khác nhau, HWG là sợi chỉ đỏ giữ cho tất cả cùng chảy về một hướng: nền vững trước — tăng trưởng sau — cộng đồng là đích.",
      hangTang: [
        { ten: "Health · Sống Khỏe", phuDe: "Tầng đầu tiên — là nền",                icon: "heart-pulse", noiDung: "Trước khi nói đến bất cứ điều gì, nền phải vững: sức khỏe thân thể được chăm chút, tài chính có lưới bảo vệ, rủi ro lớn đã được che chắn. Đây là tầng mà cả ba gian IPAG đều bắt đầu từ đó — quỹ dự phòng và bảo hiểm ở gian tài chính, dinh dưỡng và nhịp sống ở gian sức khỏe, lưới bảo vệ trước rủi ro hiểm nghèo ở gian bảo an." },
        { ten: "Wealth · Sống Giàu", phuDe: "Tầng thứ hai — gìn giữ và tích lũy",    icon: "coins",       noiDung: "Khi nền đã vững, người ta mới có thể tích sản theo mục tiêu, tiếp nối sức sống qua năm tháng, và tích lũy sự an toàn thành gia tài lâu dài. Sống Giàu không chỉ là tiền — đó là mọi thứ lớn dần theo thời gian khi ta sống đúng nếp: tài sản được tích lũy, sức khỏe được tiếp nối, sự bảo an được dày thêm từng năm." },
        { ten: "Grow · Sống Vui",    phuDe: "Tầng thứ ba — đỉnh mở ra cộng đồng",    icon: "sun",         noiDung: "Khi một người đã có nền vững và gia tài được gìn giữ, họ không chỉ sống tốt cho mình — họ trở thành người cùng chở che cho người khác, lan tỏa trí tuệ đầu tư, tinh thần tương hỗ và nếp sống Wellbeing ra rộng hơn. Sống Vui là tầng mà niềm vui không đến từ sở hữu, mà đến từ thuộc về — thuộc về một cộng đồng cùng lớn lên. Ba cộng đồng của ba gian — VNDGO, AnVie Life, PTICare — đều là nơi tầng Grow được sống thật." }
      ]
    },
    {
      icon: "compass",
      tieuDe: "Bốn — Bộ la bàn IPA Map",
      noiDung: "Khi bước vào một môi trường mới, ai cũng cần la bàn. La bàn giúp ta không chỉ làm nhanh, mà còn làm đúng. Không chỉ đạt việc, mà còn hiểu vì sao việc đó quan trọng và tạo ra giá trị gì.<br><br>Ở IPAG, hệ La bàn được gọi là <strong>IPA Map</strong>. Bạn có thể nhớ IPA Map qua bốn hướng vận hành:",
      ipagWay: [
        { chu: "D", tieuDe: "La bàn DGo",    phuDe: "Thấy đúng mục đích", noiDung: "" },
        { chu: "C", tieuDe: "La bàn DLink",  phuDe: "Thông đúng người",   noiDung: "" },
        { chu: "S", tieuDe: "La bàn DWork",  phuDe: "Cộng đúng việc",     noiDung: "" },
        { chu: "P", tieuDe: "La bàn DValue", phuDe: "Tạo giá trị đúng",   noiDung: "" }
      ],
      ketLuan: "Thông tin chi tiết về 4 la bàn, Anh/Chị sẽ được tìm hiểu trong chương trình đào tạo hội nhập."
    },
    {
      icon: "heart-handshake",
      tieuDe: "Năm — Năm nếp nhà IPAG",
      noiDung: "Nếu La bàn giúp biết đường đi, thì nếp nhà giúp người IPAG biết cách sống trên đường ấy. Năm nếp nhà để một người bước vào IPAG không chỉ nhận việc, mà nhận một gia tài; không chỉ làm phần mình, mà biết bồi thêm cho người đến sau.",
      hangTang: [
        { ten: "Nếp Trà Việt",    phuDe: "Dừng lại — lắng xuống — hiện diện",     icon: "coffee",    noiDung: "Trong một chén trà có sự chậm rãi, có đối thoại, có sự kính trọng giữa người với người. Đó là nếp để người IPAG học cách có mặt thật sự trước khi hành động." },
        { ten: "Nếp La Bàn",      phuDe: "Biết soi hướng trước khi đi",           icon: "compass",   noiDung: "Làm việc không chỉ cần nhanh, mà cần đúng: đúng mục đích, đúng người, đúng việc, đúng giá trị theo 4 la bàn IPA Map." },
        { ten: "Nếp Soi Sáng",    phuDe: "Soi mình cho sáng mình",                icon: "lightbulb", noiDung: "Mỗi người học cách nhìn lại mình, nhận ra điểm mạnh, điểm yếu, điều cần sửa và điều cần bồi. Đây không phải nếp phán xét, mà là nếp trưởng thành." },
        { ten: "Nếp Gửi Trao",    phuDe: "Không giữ riêng điều mình học được",    icon: "send",      noiDung: "Người IPAG nhận năng lực từ người đi trước, dùng nó trong công việc hôm nay, rồi gửi lại thành tri thức, kinh nghiệm, quy trình, bài học cho người đến sau." },
        { ten: "Nếp Trao Truyền", phuDe: "Vòng xa hơn của gửi trao",              icon: "repeat",    noiDung: "Không chỉ gửi một tài liệu hay một kinh nghiệm, mà trao lại một cách sống nghề, một tinh thần phụng sự, một nếp nhà có thể tiếp tục lớn lên qua nhiều thế hệ." }
      ],
      ketLuan: "Vì vậy, IPAG giữ câu khóa: «VÀO LÀ NGƯỜI THỪA KẾ — RA LÀ NGƯỜI GỬI TRAO.» Gia tài IPAG không nằm yên trong kho — gia tài ấy sống tiếp khi mỗi người biết gieo, biết tích và biết trao: «CÙNG GIEO — CÙNG TÍCH — CÙNG TRAO.»"
    },
    {
      icon: "sprout",
      tieuDe: "Sáu — Sáu vườn ươm",
      noiDung: "IPAG có 6 lĩnh vực kinh doanh chính, gọi là 6 vườn ươm. Gọi là «vườn ươm» vì mỗi vườn có 2 việc phải làm cùng lúc: <strong>giữ</strong> (chăm lo cho những gì đã có tốt hơn) và <strong>ươm</strong> (tạo ra những cái mới cho tương lai).<ul><li><strong>Vườn ươm 1:</strong> Tài chính bền vững</li><li><strong>Vườn ươm 2:</strong> Sức khỏe và đời sống</li><li><strong>Vườn ươm 3:</strong> Công nghệ sinh học và môi trường</li><li><strong>Vườn ươm 4:</strong> Công nghệ số</li><li><strong>Vườn ươm 5:</strong> Giáo dục và đào tạo</li><li><strong>Vườn ươm 6:</strong> Tiêu dùng và bán lẻ</li></ul>",
      ketLuan: "Nguyên tắc chung của 6 vườn: khác nhau ở cách làm nghề, nhưng giống nhau ở nếp sống và giá trị."
    }
  ]
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

// --- 2.3. MODULE: VĂN HOÁ EPIC ---
const epicContent = {
  tieuDe: "Văn hoá EPIC",
  moTa: "EPIC là văn hóa quản trị con người của IPAG, nơi mỗi CBNV tiếp nhận, thực hành và trao truyền những giá trị đã làm nên bản sắc của tổ chức. Thông qua EPIC, mỗi người được dẫn dắt để hiểu mình, hiểu vai trò, hiểu cách IPAG vận hành và từng bước trưởng thành trong hành trình sự nghiệp tại tổ chức.<br><br>EPIC được xây dựng trên bốn giá trị cốt lõi: <strong>Empowering – People – Impact – Collaboration</strong> — trao quyền bằng sự rõ ràng, đặt con người ở trung tâm, hướng đến giá trị thật có thể đo được và cộng tác để tạo nên kết quả lớn hơn từng cá nhân. Đây không phải là một bộ khẩu hiệu, mà là cách IPAG định hướng để mỗi người hiểu đúng vai, kết nối đúng người, cộng đúng việc và tạo đúng giá trị.<br><br>Trong hành trình hội nhập, EPIC đồng hành cùng CBNV mới qua ba chặng: <strong>Văn để Hóa</strong> (Đọc để cảm văn hóa) — <strong>Duyên để Giác</strong> (Thực hành để hiểu nếp sống) — <strong>Hạnh để Hành</strong> (Sống nghề để phụng sự). Qua đó, mỗi người từng bước hình thành nền tảng làm việc có chủ tâm, có kết nối, có trách nhiệm và có đóng góp.<br><br>Tinh thần cốt lõi của EPIC là: con người trưởng thành thì tổ chức trưởng thành. Vì vậy, EPIC không chỉ giúp CBNV mới hòa nhập với IPAG, mà còn mở ra hành trình để mỗi người trưởng thành trong trí tuệ, trong năng lực và trong giá trị mình tạo ra cho tổ chức.<br><br><em>Hãy giữ EPIC Pocket Card như kim chỉ nam để bạn dần hiểu và thấm nhuần văn hóa quản trị EPIC của IPAG.</em>",

  // Tạm ẩn 4 card chữ E-P-I-C bên dưới Pocket Card (07/2026).
  // Bật lại: đổi thành true. Dữ liệu bonChu vẫn giữ nguyên bên dưới.
  hienBonChu: false,
// Chỉ dùng 1 file PNG hi-res duy nhất (export 2x-3x từ Canva).
  // Khi update: export PNG mới, tăng version trong tên file (v7, v8...) để tránh cache.
  pocketCard: {
    anh: "images/chung/epic-pocket-card-v6.png"
  },
  // 4 chữ EPIC dưới ảnh
  bonChu: [
    {
      chu: "E",
      tieuDe: "Empowering",
      phuDe: "Trao quyền cho tập thể",
      noiDung: "IPAG trao quyền cho tập thể đội ngũ cùng ra quyết định và cùng sở hữu kết quả. Đây là điều kiện để con người khai phá tiềm năng nội lực và phát huy năng lực, trí tuệ tập thể."
    },
    {
      chu: "P",
      tieuDe: "People",
      phuDe: "Con người là tài sản chính",
      noiDung: "Con người là nguồn lực trung tâm và tài sản chính của Ngân hàng Năng lực. IPAG đầu tư vào môi trường làm nghề và cơ hội trải nghiệm để mỗi người phát triển trí tuệ, tích lũy tri thức và khám phá năng lực tự thân."
    },
    {
      chu: "I",
      tieuDe: "Impact",
      phuDe: "Đo bằng tác động tạo ra",
      noiDung: "Giá trị được đo bằng tác động tạo ra, không phải nỗ lực bỏ ra. Tác động tích cực tới wellbeing của khách hàng, đội ngũ, cổ đông và cộng đồng là mục đích công việc, đồng điệu với Action &amp; Accountability trong IPAG Way."
    },
    {
      chu: "C",
      tieuDe: "Collaboration",
      phuDe: "Hợp tác là nguyên tắc vận hành",
      noiDung: "Hợp tác là nguyên tắc vận hành của hệ sinh thái mở. Mỗi đơn vị — IPA Solution, IPA Management, IPA Partners, IPA Living — kết nối, chia sẻ và cộng hưởng giá trị với nhau qua Tích hợp, Hợp lực, Cộng sức và Cộng hưởng xuyên thế hệ."
    }
  ]
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
        "Tìm hiểu vai trò, phạm vi trách nhiệm (SOA – Span of Accountability) cùng với FD Head và FC Head",
        "Gặp gỡ và hoà nhập cùng đội ngũ trong la bàn Dlink",
        "Xây dựng kế hoạch làm việc trong la bàn Dwork (theo các mốc 30-60 ngày) cùng FD Head và FC Head"
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
        "Tìm hiểu cách đơn vị của bạn kết nối với hạ tầng khác trong hệ sinh thái",
        "Tham gia chương trình On-job training, các cuộc mentor 1-1, coaching 1-1 cùng Buddy, FD Head, FC Head để hiểu sâu về hệ thống, quy trình nghiệp vụ, sản phẩm liên quan đến công việc",
        "Bắt đầu thực hiện những nhiệm vụ đầu tiên trong la bàn Dwork đã thống nhất và tạo ra các output đầu tiên",
        "Thực hành Nền và Nếp của IPAG, thực hiện IPAC Reflect để nhận diện: điều gì đã rõ và điều gì còn cần hỗ trợ từ phía tổ chức"
      ]
    },
    {
      mocThoiGian: "Tháng 2",
      tieuDe: "Tăng tốc & Ghi dấu",
      icon: "rocket",
      mauNhan: "steel",
      moTaNgan: "Tìm nhịp riêng — tối ưu hiệu suất, ghi dấu giá trị.",
      hoatDong: [
        "Tìm thấy nhịp điệu làm việc của cá nhân, tối ưu hoá hiệu suất tại các nhiệm vụ chức năng FC, ghi dấu bằng những giá trị đóng góp đầu tiên",
        "Tham gia dự án OC khi được trao cơ hội",
        "Nhận diện 4 la bàn IPAG Compass sau 2 tháng hội nhập",
        "Xây dựng IDP (Individual Development Plan) cho giai đoạn tiếp theo"
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
  tieuDe: "Mạng lưới đồng hành & Nền tảng",
  moTa: "Bốn vai trò chính sẽ đồng hành cùng bạn trong la bàn Dlink, cùng các đầu mối hỗ trợ và nền tảng số khác trong hệ sinh thái.",
  // 4 vai trò luôn hiện dạng card
  vaiTroChinh: [
    {
      icon: "user-check",
      mauVien: "orange",
      tieuDe: "FD Head",
      phuDe: "Người quản lý trực tiếp",
      noiDung: "Người quản lý trực tiếp trong la bàn dGO — chịu trách nhiệm phát triển bạn về mặt chuyên môn và năng lực cốt lõi tại IPAG."
    },
    {
      icon: "user-round-plus",
      mauVien: "navy",
      tieuDe: "Buddy",
      phuDe: "Bạn đồng hành",
      noiDung: "Đồng nghiệp trong cùng team hoặc cùng chuyên môn, sẽ hỗ trợ bạn nhanh chóng hoà nhập, hiểu văn hoá, nắm bắt công việc và cảm thấy được chào đón trong tổ chức.<br><br><em>Thông tin chi tiết về người bạn đồng hành đã được gửi tới bạn trong thư chào mừng.</em>"
    },
    {
      icon: "users",
      mauVien: "orange",
      tieuDe: "EPIC Partner",
      phuDe: "Cầu nối với nhân sự",
      noiDung: "Cầu nối giữa bạn và bộ phận nhân sự, lắng nghe và hỗ trợ bạn giải quyết các vấn đề liên quan đến nhân sự.<br><br><em>Thông tin chi tiết đã được gửi tới bạn trong thư chào mừng.</em>"
    },
    {
      icon: "briefcase",
      mauVien: "navy",
      tieuDe: "FC / OC Manager",
      phuDe: "Người giao và dẫn việc",
      noiDung: "Người giao và dẫn việc — công việc và phạm vi nhiệm vụ trong trục Dwork."
    }
  ],
  // Đầu mối khác — dạng accordion
  dauMoiKhac: {
    tieuDe: "Đầu mối hỗ trợ khác",
    danhSach: [
      {
        ma: "CnB",
        tenDayDu: "Bộ phận CnB (Compensation & Benefits)",
        moTa: "Phụ trách chế độ đãi ngộ, lương thưởng, bảo hiểm, phúc lợi cho nhân viên IPAG.",
        email: "(Đầu mối liên hệ theo SBU — vui lòng tham khảo Quản lý trực tiếp)",
        mauNhan: "navy"
      },
      {
        ma: "IP",
        tenDayDu: "Bộ phận IP — Đào tạo Hội nhập",
        moTa: "<strong>Kỹ thuật & hệ thống LMS:</strong> Mr Nguyễn Sỹ Đắc — dac.nguyensy@ipam.vn — 0985 511 164 · Ms Nguyễn Thu Hương — huong.nguyenthu13@ipam.vn — 0366 737 557.<br><strong>Lộ trình & chuyên môn đào tạo hội nhập:</strong> đơn vị PTI — Ms Phạm Hiếu Ngân — ngan.phamhieu@ipam.vn — 0963 278 246 · các SBU còn lại — Ms Nguyễn Thu Hương.",
        email: "huong.nguyenthu13@ipam.vn",
        mauNhan: "orange"
      }
    ]
  },
  // Nền tảng — giữ như cũ
  nenTang: {
    tieuDe: "Hệ sinh thái Nền tảng (Platforms)",
    danhSach: [
      { icon: "monitor-play", tieuDe: "eLearning (LMS)", moTa: "Hệ thống đào tạo trực tuyến. Nơi bạn tham gia các khoá học Onboarding, làm bài kiểm tra và theo dõi lộ trình phát triển năng lực. <em>Lưu ý: LMS hiện chưa hỗ trợ trên điện thoại — vui lòng truy cập bằng máy tính.</em>",
        linkNgoai: { url: "https://id.ipas.com.vn/login?redirect-app=elearning-web", tieuDeNut: "Truy cập tại đây" } },
      { icon: "database",      tieuDe: "KMS",             moTa: "Kho tri thức tập đoàn (Knowledge Management System). Nơi lưu trữ, chia sẻ các tài liệu nghiệp vụ, thư viện số và bài viết chuyên môn từ chuyên gia IPAG.",
        linkNgoai: { url: "https://kms.ivnd.com.vn/", tieuDeNut: "Truy cập tại đây" } },
      { icon: "file-text",     tieuDe: "dPolicy",         moTa: "Cổng tra cứu chính sách, quy trình, quy định nội bộ. Đảm bảo mọi hoạt động vận hành luôn tuân thủ đúng quy chuẩn của tập đoàn.",
        linkNgoai: { url: "https://dpolicy.ipam.vn/#/dang-nhap?targetUrl=%2F", tieuDeNut: "Truy cập tại đây" } },
      { icon: "check-square",  tieuDe: "iLead",           moTa: "Hệ thống trình duyệt điện tử. Nơi bạn khởi tạo, đề xuất và phê duyệt các yêu cầu, tờ trình, hợp đồng thay cho giấy tờ truyền thống.",
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

  // Khoá học chung — cho mọi SBU
  companyOnboarding: {
    khoaHoc: [
      { ten: "IPAG Onboarding (T11/2025)", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/10b2c440-ce36-4d87-bc68-d559387efe2b", batBuoc: true },
      { ten: "IPAG Compass - La bàn sự nghiệp T6.2026", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/a419ddc9-bd8d-4c39-b41e-47d533c71e92", batBuoc: true },
      { ten: "Dstation (3 nếp sống)_Anvie Life_T11.2025", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/374fb55d-c134-47e8-a139-1871a3c63895", batBuoc: true },
      { ten: "Dstation (3 nếp sống)_VNDGO_T11.2025", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/5df888b3-60db-4716-9c7c-0554ebc58e04", batBuoc: true },
      { ten: "Dstation (3 nếp sống)_PTICARE_T11.2025", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/d0ebfea0-3a04-4156-9030-92a639d018f3", batBuoc: true },
      { ten: "COE Onboarding (T12.2025)", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/d4449058-78f3-48b4-b157-00dec6bd0e44", batBuoc: true },
      { ten: "SAS - An ninh, Tuân thủ & Giám sát", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/0df99e1a-8c1c-428b-9bd2-f464e397dabc", batBuoc: true },
      { ten: "Code of conduct_V2", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/650f458a-589a-4d3a-beba-ba8080992e5a", batBuoc: true },
      { ten: "Nhận thức An ninh thông tin", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/2b1fdadd-fd39-4715-afe4-842f955e09e5", batBuoc: true }
    ]
  },

  // Khoá học theo SBU × Khối — giữ nguyên VNDS, PTI; các SBU khác để khi mở
  jobOnboarding: {
    theoKhoi: {
      IPAG: {
        kinhDoanh: [],
        backOffice: []
      },
      VNDS: {
        kinhDoanh: [
          { ten: "Cây doanh nhân", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/37722112-9ce2-47ac-bb2b-7f103079651b", batBuoc: true },
          { ten: "DGO Life - Nhập môn đầu tư", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/9017b51e-e6b7-49f5-b770-c392d815b78e", batBuoc: true },
          { ten: "Nguyên tắc chung sản phẩm trái phiếu", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/ead85b35-f9cc-48f0-9870-00d86702085c", batBuoc: true },
          { ten: "Trái phiếu DBOND", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/847fdc71-cc53-4eec-87f6-a2d71109fbb2", batBuoc: true },
          { ten: "Trái phiếu VBOND", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/74166fb1-d17e-40b4-9733-30885a00c789", batBuoc: true },
          { ten: "Sản phẩm Tích sản", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/0fbce4e5-82b1-4f60-9b28-974af6a87b67", batBuoc: true },
          { ten: "Quỹ mở trái phiếu VNDBF_V2", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/1a59def6-f776-4089-ab5f-dc8a64cdb8f3", batBuoc: true },
          { ten: "Quỹ mở cổ phiếu VNDAF", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/971c970e-31af-4c09-81c2-d98693f5d81b", batBuoc: true },
          { ten: "Sản phẩm Quỹ mở trái phiếu linh hoạt VNDCF", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/cf6f2de3-8efd-4c7d-aaf8-1e3e1adbe056", batBuoc: true },
          { ten: "Dmargin - Giao dịch ký quỹ và ứng trước tiền bán", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/1eec1c28-40b0-4ad2-80a3-82d86c6333e7", batBuoc: true },
          { ten: "Tư vấn theo 3B (Bạn - Bàn - Bày)_V2", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/061f94ec-9c8e-48bb-a18d-edad1f2df8cd", batBuoc: true },
          { ten: "Tư vấn đầu tư tích sản", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/8828432c-e11b-4d57-b0f0-8f3569df0b53", batBuoc: true },
          { ten: "Digital Platform", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/6db7c16d-af40-4edd-a286-031ca3c0da43", batBuoc: true },
          { ten: "DSR_MG", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/1777c901-b01d-4781-943a-5408096cb0a9", batBuoc: true },
          { ten: "Bài kiểm tra cuối chương trình Job Onboarding_MG", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/b0814bbe-c97b-433b-8ac9-c82e0fce58bd", batBuoc: true }
        ],
        backOffice: [
          { ten: "Cây doanh nhân", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/37722112-9ce2-47ac-bb2b-7f103079651b", batBuoc: true },
          { ten: "DGO Life - Nhập môn đầu tư", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/9017b51e-e6b7-49f5-b770-c392d815b78e", batBuoc: true },
          { ten: "Digital Platform", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/6db7c16d-af40-4edd-a286-031ca3c0da43", batBuoc: true },
          { ten: "DSR_WA", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/4a80bc5d-b410-4acf-8ed3-3ff996aae4da", batBuoc: true },
          { ten: "Bài kiểm tra cuối chương trình Job Onboarding_WA", moTa: "Học tập trên hệ thống E-learning nội bộ.", lmsUrl: "https://elearning.ipam.vn/lop-hoc/chi-tiet/97b38bb5-eaad-45fd-bff3-4d2d3070fdff", batBuoc: true }
        ]
      }
    }
  }
};


/* =============================================================================
   PHẦN 4: TIPS / MẸO THEO MODULE
   ============================================================================= */
const globalTips = {
  'ipag-la-ai': {
    tieuDe: "Đọc theo Nhịp Đếm — không cần thuộc lòng",
    noiDung: "Module này có 6 nhịp: **Một nhà · Hai nền tảng · Ba tầng · Bốn la bàn · Năm nếp nhà · Sáu vườn ươm** — không cần đọc hết trong 1 lần.\n\n1. **Lượt 1:** đọc nhịp *Một* để hiểu ngôi nhà, tầm nhìn và sứ mệnh.\n2. **Lượt 2:** đọc *Hai* + *Ba* khi bạn bắt đầu làm việc với các đơn vị khác trong hệ sinh thái.\n3. **Lượt 3:** đọc *Bốn* + *Năm* + *Sáu* song song với chương trình đào tạo hội nhập.\n\nMẹo: tap vào từng nhịp để mở/đóng — chỉ cần bắt đầu từ Một."
  },
  'vai-tro': {
    tieuDe: "Bạn không phải cấp dưới — bạn là một nguồn lực",
    noiDung: "Bốn nguyên lý ở module này không phải lời slogan. Đây là cách IPAG thực sự đối xử với từng cá nhân.\n\n- Khi bạn được giao một việc → đó là **trao quyền**, không phải chỉ thị.\n- Khi bạn báo cáo → tập trung vào **tác động** (impact), không phải số giờ bỏ ra.\n- Khi bạn thấy điều gì chưa đúng → bạn có **trách nhiệm** lên tiếng."
  },
  'epic': {
    tieuDe: "EPIC Pocket Card — đọc dần, không cần thuộc lòng",
    noiDung: "EPIC Pocket Card chứa toàn bộ tinh thần văn hoá quản trị IPAG trong 1 trang.\n\n- Đọc từ trên xuống theo ba chặng: **Văn để Hóa** (cảm văn hoá) → **Duyên để Giác** (thực hành để hiểu) → **Hạnh để Hành** (sống nghề để phụng sự).\n- Mỗi khi gặp tình huống khó, tự hỏi: *điều này có tạo ra tác động thật không? có cùng làm với người khác không?*\n\nBấm vào ảnh để mở bản đầy đủ, phóng to đọc rõ từng phần."
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
