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
  IPAM:  { tenDayDu: "IPAM",           khoi: { kinhDoanh: "Khối Kinh doanh", backOffice: "Khối Back office" } },
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
  epicCardCaption:   "Bấm vào ảnh để mở PDF (có thể phóng to / thu nhỏ trực tiếp trong PDF viewer).",
  epicPdfFullscreen: "Mở fullscreen",
  epicPdfCloseHint:  "Nhấn Esc để đóng · Dùng Ctrl + cuộn chuột để zoom"
};

// --- 1.4. NỘI DUNG WELCOME SCREEN ---
const welcomeContent = {
  brand: "IPAG GROUP",
  tieuDe: "Chào mừng đến với<br><span>IPA Group!</span>",
  // Đoạn lời chào (đoạn đầu)
  loiChao: "Bạn vừa gia nhập một tổ chức được kiến tạo qua 27 năm — không phải để trở thành một tập đoàn lớn hơn, mà để trở thành một tổ chức làm nghề tử tế và bền vững hơn. Ở đây, mỗi người được nhìn nhận là một nguồn lực có trí tuệ, có năng lực tự thân, và có khả năng phát triển cùng tập thể.",
  // Đoạn mô tả handbook — gộp đoạn 2 và 3 từ spec
  moTa: "Cuốn sổ tay hội nhập sẽ giúp bạn hiểu IPAG là ai, vì sao chúng tôi tồn tại, và bạn đứng ở đâu trong bức tranh chung. Hãy đọc thong thả. Những điều quan trọng nhất ở IPAG không nằm ở quy trình, mà ở cách chúng tôi nhìn về con người, về giá trị, và về hành trình dài phía trước.<br><br>Chúng tôi tin rằng một người sống tỉnh thức sẽ góp phần tạo nên một tổ chức tỉnh thức. Hành trình của bạn ở IPAG bắt đầu từ hôm nay — và chúng tôi mong được đồng hành cùng bạn trên chặng đường ấy.",
  // Câu footer
  huongDan: "Hệ sinh thái Wellbeing Việt Nam · Vận hành theo mô hình Ngân hàng Năng lực"
};


/* =============================================================================
   PHẦN 2: NỘI DUNG MODULE CHUNG
   ============================================================================= */

// --- 2.1. MODULE: IPAG LÀ AI? ---
const iPAGContent = {
  tieuDe: "IPAG là ai?",
  moTa: "Trước khi tìm hiểu công việc, hãy hiểu tổ chức bạn vừa gia nhập. Sáu phần dưới đây là bức tranh ngắn gọn nhất về IPAG — đọc theo thứ tự hoặc nhảy thẳng vào phần bạn quan tâm.",
  // 4 con số nổi bật ở hero card đầu module
  conSo: [
    { soLieu: "27",    nhan: "Năm kiến tạo",            icon: "calendar-clock" },
    { soLieu: "32+",   nhan: "Công ty thành viên",      icon: "building" },
    { soLieu: "4.500+", nhan: "Cán bộ nhân viên",        icon: "users" },
    { soLieu: "4",     nhan: "Hạ tầng năng lực",        icon: "layers" }
  ],
  // 6 phần dạng accordion
  cacPhan: [
    {
      icon: "lightbulb",
      tieuDe: "Vì sao IPAG tồn tại",
      noiDung: "Trong 27 năm, IPAG quan sát một thực tế của thị trường vốn Việt Nam: thị trường không thiếu vốn, mà thiếu năng lực kết nối vốn với năng lực thực thi — để vốn đi đến đúng nơi cần và tạo ra giá trị bền vững.<br><br>Doanh nghiệp Việt, đặc biệt là doanh nghiệp vừa và nhỏ, thường thiếu năng lực quản trị theo chuẩn mực, thiếu hạ tầng công nghệ đủ quy mô, thiếu mạng lưới phân phối có chiều sâu.<br><br>IPAG được hình thành để kiến tạo lời giải cho bài toán đó — bằng cách kết nối nhiều năng lực thành sức mạnh tổng hợp, giúp doanh nghiệp Việt phát huy thế mạnh toàn diện và hướng tới wellbeing."
    },
    {
      icon: "target",
      tieuDe: "Định vị",
      noiDung: "<strong>IPA Group là Hệ sinh thái Wellbeing Việt Nam</strong> — kết tinh sau 27 năm kiến tạo, từ một định chế tài chính thành tập đoàn đầu tư vận hành theo mô hình Ngân hàng Năng lực.<br><br>Tập đoàn niêm yết trên Sở Giao dịch Chứng khoán Hà Nội (HNX: IPA), với hơn 32 công ty thành viên và hơn 4.500 cán bộ nhân viên.<br><br>Điều làm IPAG khác biệt: chúng tôi không chỉ cung cấp vốn. Chúng tôi kết tinh và kết nối bốn năng lực thiết yếu cho doanh nghiệp Việt — công nghệ, quản trị, vốn và nguồn lực con người — qua bốn hạ tầng năng lực tích hợp."
    },
    {
      icon: "settings-2",
      tieuDe: "Mô hình vận hành: Ngân hàng Năng lực",
      noiDung: "Ngân hàng Năng lực (Capability Bank) là mô hình tổ chức mới của IPA Group — định hình lại cách đóng gói sản phẩm dịch vụ trong việc định vị và kiến tạo giá trị cho thị trường.<br><br>Không cạnh tranh với ngân hàng thương mại (quản lý tiền), không cạnh tranh với các công ty quản lý tài sản truyền thống (quản lý danh mục đầu tư).<br><br>IPAG là một loại kiến trúc tổ chức mới — kiến tạo và kết nối năng lực của hệ sinh thái, đóng gói thành giải pháp toàn diện phù hợp với từng nhu cầu phát triển của doanh nghiệp, từ đó tạo cơ hội tiếp cận cho các nhà đầu tư tài chính cá nhân, huy động sức mạnh của cộng đồng cùng phát triển và cùng hưởng thành tựu."
    },
    {
      icon: "compass",
      tieuDe: "Tầm nhìn, Sứ mệnh & IPAG Way",
      noiDung: "<strong>TẦM NHÌN</strong><br>Mỗi người Việt trong cộng đồng Việt sống tỉnh thức và trọn vẹn mỗi ngày — qua một hệ sinh thái Wellbeing kết nối gia tài trí tuệ, mạng lưới tri thức và năng lực Việt toàn cầu.<br><br><strong>SỨ MỆNH</strong><br>IPA Group đảm nhiệm sứ mệnh của một Ngân hàng Năng lực — kết nối Công nghệ, Con người và Chuỗi giá trị để khai thông dòng vốn cho doanh nghiệp Việt, kiến tạo giải pháp phát triển năng lực toàn diện, và cung ứng giải pháp cho cuộc sống tỉnh thức và trọn vẹn của cộng đồng người Việt.<br><br>Chúng tôi hướng tới giấc mơ đại đồng — nơi mỗi người Việt có cơ hội tiếp cận giải pháp Wellbeing và phụng sự hệ sinh thái, bảo vệ gia tài di sản truyền thống và gìn giữ giá trị xuyên thế hệ.",
      ipagWay: [
        { chu: "I", tieuDe: "Insight & Integration", phuDe: "Thấu hiểu và Tích hợp", noiDung: "Trí tuệ thấu hiểu là nền tảng của tích hợp. Chúng tôi hiểu sâu doanh nghiệp, thị trường và cộng đồng trước khi kết nối các năng lực rời rạc thành sức mạnh tổng hợp. Với bạn: hiểu trước khi hành động, lắng nghe trước khi đề xuất." },
        { chu: "P", tieuDe: "Pathway & Partnership", phuDe: "Định hướng và Đồng hành", noiDung: "Với định hướng của một tầm nhìn dài hạn, chúng tôi đồng hành theo toàn trình của chặng đường phát triển, không chỉ phục vụ theo từng giao dịch đơn lẻ. Đội ngũ IPAG thực hành và thực chứng nếp sống tỉnh thức trước khi chia sẻ giải pháp với cộng đồng." },
        { chu: "A", tieuDe: "Action & Accountability", phuDe: "Hành động và Trách nhiệm", noiDung: "Hành động và trách nhiệm là hai mặt không thể tách rời. Ở IPAG, thẩm quyền luôn đi cùng trách nhiệm — không có thẩm quyền mà không có trách nhiệm, không có trách nhiệm mà không có thẩm quyền. Chúng tôi đo giá trị của mình bằng tác động tạo ra, không bằng nỗ lực bỏ ra." },
        { chu: "G", tieuDe: "Greatness & Generation", phuDe: "Vượt trội và Xuyên thế hệ", noiDung: "Sự vượt trội có ý nghĩa khi nó xuyên thế hệ. Chúng tôi theo đuổi sự xuất sắc trong từng việc làm vì mục tiêu để lại di sản cho thế hệ sau — vì giá trị bền vững cho tương lai của người Việt, không vì sự công nhận của hiện tại." }
      ]
    },
    {
      icon: "layers",
      tieuDe: "Kiến trúc hệ sinh thái: 4 hạ tầng năng lực",
      noiDung: "IPAG vận hành qua bốn hạ tầng năng lực. Bốn hạ tầng cùng vận hành tạo nên sức mạnh tổng hợp của Ngân hàng Năng lực — không cao không thấp, không trước không sau, mỗi đơn vị điều phối một phương diện riêng của hệ sinh thái mở.",
      hangTang: [
        { ten: "IPA Solution",   phuDe: "Hạ tầng Công nghệ Số",         icon: "monitor", noiDung: "Hơn 700 chuyên gia phần mềm và dữ liệu, vận hành công nghệ cho toàn hệ sinh thái và kết nối số giữa doanh nghiệp, nhà đầu tư và cộng đồng." },
        { ten: "IPA Management", phuDe: "Hạ tầng Quản trị Doanh nghiệp", icon: "briefcase", noiDung: "Đồng hành các công ty trong portfolio sau đầu tư: tái cấu trúc quản trị theo chuẩn niêm yết, chuẩn hoá vận hành, tích hợp vào chuỗi giá trị hệ sinh thái." },
        { ten: "IPA Partners",   phuDe: "Hạ tầng Đầu tư",                icon: "trending-up", noiDung: "Công ty quản lý quỹ được cấp phép UBCKNN, kết nối dòng vốn từ cộng đồng nhà đầu tư đến chuỗi giá trị hệ sinh thái qua ba giải pháp: Quỹ Đầu tư Tư nhân, Quỹ Hưu Trí Tự Nguyện và Dịch vụ Tín thác." },
        { ten: "IPA Living",     phuDe: "Hạ tầng Phân phối Wellbeing",   icon: "leaf", noiDung: "Đưa giải pháp và sản phẩm của hệ sinh thái đến cộng đồng người Việt qua mạng lưới Dstation toàn quốc, theo ba chiều HWG: <strong>Sống Khỏe (Health)</strong> — Anvie Life, Homefood Macrobiotics, Ong Trung ương. <strong>Sống Giàu (Wealth)</strong> — VNDGO, VNDirect. <strong>Sống An (Grow)</strong> — PTIcare, bảo hiểm PTI." }
      ]
    },
    {
      icon: "history",
      tieuDe: "Câu chuyện 27 năm",
      noiDung: "Hành trình 27 năm của IPAG là câu chuyện về một mô hình tổ chức làm nghề chuyên nghiệp được kết tinh qua thời gian — từ những bài học thực tiễn về vận hành, quản trị và đồng hành với doanh nghiệp Việt.",
      mocLichSu: [
        { nam: "1998",      tieuDe: "Khởi đầu hành trình",                 moTa: "Thành lập Công ty TNHH VTS tại Hà Nội — tiền thân của IPA Group. Đặt viên gạch đầu tiên cho hành trình đầu tư tài chính dài hạn." },
        { nam: "2006",      tieuDe: "Bước vào thị trường chứng khoán",     moTa: "Tham gia thành lập VNDirect — sau này trở thành một trong những công ty chứng khoán hàng đầu Việt Nam." },
        { nam: "2007–2008", tieuDe: "Mở rộng định chế tài chính",          moTa: "Phát triển mạng lưới các định chế tài chính, đa dạng hoá hoạt động trong lĩnh vực chứng khoán và đầu tư." },
        { nam: "2010–2015", tieuDe: "Củng cố nền tảng",                    moTa: "Củng cố và phát triển các công ty thành viên cốt lõi, chuẩn hoá vận hành theo chuẩn niêm yết." },
        { nam: "2016–2017", tieuDe: "Mở rộng sang bảo hiểm phi nhân thọ", moTa: "Đầu tư chiến lược vào PTI (Bảo hiểm Bưu điện), mở rộng hệ sinh thái sang ngành bảo hiểm phi nhân thọ." },
        { nam: "2021–2022", tieuDe: "Định hình Ngân hàng Năng lực",        moTa: "Chuyển mình từ định chế tài chính thành tập đoàn đầu tư vận hành theo mô hình Ngân hàng Năng lực — tiên phong khái niệm này tại Việt Nam." },
        { nam: "2024",      tieuDe: "Định hình ba trụ cột năng lực",       moTa: "Định hình ba trụ cột vận hành — IPA Solution, IPA Living, IPA Management — làm nền tảng cho kiến trúc bốn hạ tầng." },
        { nam: "2025–2026", tieuDe: "Hệ sinh thái Wellbeing Việt Nam",     moTa: "Định vị lại tập đoàn dưới danh nghĩa Hệ sinh thái Wellbeing Việt Nam, hoàn thiện bốn hạ tầng năng lực và hướng tới phục vụ cộng đồng Việt toàn cầu qua hệ sinh thái." }
      ]
    }
  ]
};

// --- 2.2. MODULE: VAI TRÒ CỦA BẠN ---
// Schema mới: theoKhoi (optional, ở TRÊN) + chung (bắt buộc, ở DƯỚI).
// Nếu khối nào không được định nghĩa trong theoKhoi → engine tự bỏ qua, chỉ hiện phần chung.
const vaiTroContent = {
  tieuDe: "Vai trò của bạn trong hệ sinh thái",
  moTa: "Dù bạn làm việc ở hạ tầng nào, bạn đều là một phần của cùng một hệ sinh thái mở. Ở IPAG, các đơn vị không vận hành độc lập như những công ty riêng lẻ — chúng kết nối năng lực với nhau, chia sẻ hạ tầng chung làm đòn bẩy, và cộng hưởng để cùng phát triển.",

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
        noiDung: "IPAG xem con người là nguồn lực trung tâm và là tài sản chính của Ngân hàng Năng lực. Đầu tư vào con người là cam kết đầu tư dài hạn nhất của tổ chức — qua môi trường làm nghề, cơ hội trải nghiệm, và sự trợ lực của tập thể."
      },
      {
        icon: "key-round",
        tieuDe: "Trao quyền đi cùng trách nhiệm",
        noiDung: "Mỗi người được trao thẩm quyền trong phạm vi của mình, cùng tinh thần làm chủ và chịu trách nhiệm với kết quả. Đây là cách IPAG giúp bạn khai phá năng lực tự thân và phát huy trí tuệ tập thể."
      },
      {
        icon: "target",
        tieuDe: "Đo bằng tác động",
        noiDung: "Giá trị công việc ở IPAG được đo bằng tác động tích cực tạo ra cho khách hàng, đội ngũ, cổ đông và cộng đồng — không bằng nỗ lực bỏ ra hay số lượng hoạt động."
      },
      {
        icon: "sparkles",
        tieuDe: "Văn hoá EPIC",
        noiDung: "Cách làm việc ở IPAG được kết tinh trong văn hoá EPIC — <strong>Empowering People to create Impact through Collaboration</strong>. Bạn sẽ được giới thiệu chi tiết về EPIC trong module tiếp theo và trong các chương trình đào tạo hội nhập."
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
  moTa: "Để vận hành Ngân hàng Năng lực, IPA Group đã kiến tạo một triết lý quản trị nguồn lực con người hoàn toàn khác biệt — một kiến trúc tổ chức hướng tới con người, nơi mỗi con người sống tỉnh thức sẽ tạo ra một tổ chức tỉnh thức, có khả năng nhận diện, sửa chữa và phát triển liên tục xuyên nhiều thế hệ.",
  pocketCard: {
    anh: "images/chung/EPIC_Pocket_Card_v6_VN_v1.png",
    pdf: "files/chung/EPIC_Pocket_Card_v6_VN_v1.pdf"
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
const quyDinhContent = {
  tieuDe: "Quy định nhân sự",
  moTa: "Các quy định, mốc thời gian và biểu mẫu nhân sự cần tuân thủ trong thời gian hội nhập và thử việc.",
  cacMuc: [
    {
      icon: "clock",
      tieuDe: "Thời gian làm việc",
      noiDung: "<strong>Giờ hành chính:</strong><br>- Sáng: 8h00 - 12h00<br>- Chiều: 13h00 - 17h00<br>- Làm việc từ Thứ 2 đến Thứ 6.<br><br><em>Chi tiết về làm thêm giờ, ca kíp (nếu có) sẽ được thông báo bởi Quản lý trực tiếp.</em>"
    },
    {
      icon: "shirt",
      tieuDe: "Trang phục (Dress code)",
      noiDung: "- Trang phục lịch sự, chuyên nghiệp (Smart Casual)<br>- Thứ 6 được mặc thoải mái hơn (jeans, áo phông có cổ)<br><br><em>Tuỳ SBU/đơn vị có thể có quy định cụ thể hơn — sẽ được thông báo qua Quản lý trực tiếp.</em>"
    },
    {
      icon: "shield-alert",
      tieuDe: "Quy định khác",
      noiDung: "- Tuyệt đối không chia sẻ tài khoản nội bộ cho người khác.<br>- Không mang dữ liệu khách hàng hoặc tài liệu mật ra khỏi hệ thống mạng lưới công ty.<br>- Tuân thủ <strong>Code of Conduct</strong> đã giới thiệu trong chương trình đào tạo.<br>- Bảo mật thông tin, khoá màn hình khi rời chỗ ngồi."
    },
    {
      icon: "graduation-cap",
      tieuDe: "Thời gian hoàn thành chương trình đào tạo hội nhập",
      noiDung: "Bạn cần hoàn thành <strong>100% các khoá học Company Onboarding</strong> trên hệ thống LMS trong vòng <strong>tháng đầu tiên</strong>.<br><br>Các khoá Job Onboarding cần hoàn thành đầy đủ <strong>trước ngày kết thúc 2 tháng hội nhập</strong>.<br><br>Việc hoàn thành đúng hạn là một trong những điều kiện để được xác nhận đạt yêu cầu thử việc."
    },
    {
      icon: "file-text",
      tieuDe: "Báo cáo thử việc sau 2 tháng",
      noiDung: "Bạn cần thực hiện báo cáo kết quả thử việc và nộp cho Quản lý trực tiếp <strong>chậm nhất 05 ngày trước khi kết thúc 2 tháng hội nhập</strong>.<br><br>Tải biểu mẫu báo cáo dưới đây, tự đánh giá mức độ hoàn thành công việc và nộp lại cho Quản lý trực tiếp. Quản lý và EPIC Partner sẽ tiến hành review và ra quyết định ký Hợp đồng lao động chính thức.",
      fileDinhKem: {
        loai: "csv-tao-tu-dong",
        tenFile: "Bao_cao_thu_viec_IPAG.csv",
        tieuDeNut: "Tải Biểu mẫu Báo cáo (.csv)",
        headers: ["Họ và tên", "Phòng ban", "Tháng 1 (Mục tiêu)", "Tháng 1 (Kết quả)", "Tháng 2 (Mục tiêu)", "Tháng 2 (Kết quả)", "Đánh giá chung"],
        sampleRow: ["Nguyễn Văn A", "Khối Kinh doanh", "Hoàn thành 100% Onboarding", "Đạt", "Nắm vững SP A", "Đạt", "Tốt"]
      }
    }
  ]
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
        moTa: "Liên quan đến chương trình đào tạo hội nhập, hỗ trợ kỹ thuật LMS, tư vấn lộ trình học.",
        email: "Ms Hoàn Trần — hoan.tranthu@ipam.vn",
        mauNhan: "orange"
      }
    ]
  },
  // Nền tảng — giữ như cũ
  nenTang: {
    tieuDe: "Hệ sinh thái Nền tảng (Platforms)",
    danhSach: [
      { icon: "monitor-play", tieuDe: "eLearning (LMS)", moTa: "Hệ thống đào tạo trực tuyến tập trung. Nơi bạn tham gia các khoá học Onboarding, làm bài kiểm tra và theo dõi lộ trình phát triển năng lực." },
      { icon: "database",      tieuDe: "KMS",             moTa: "Kho tri thức tập đoàn (Knowledge Management System). Nơi lưu trữ, chia sẻ các tài liệu nghiệp vụ, thư viện số và bài viết chuyên môn từ chuyên gia IPAG." },
      { icon: "file-text",     tieuDe: "dPolicy",         moTa: "Cổng tra cứu chính sách, quy trình, quy định nội bộ. Đảm bảo mọi hoạt động vận hành luôn tuân thủ đúng quy chuẩn của tập đoàn." },
      { icon: "check-square",  tieuDe: "iLead",           moTa: "Hệ thống trình duyệt điện tử. Nơi bạn khởi tạo, đề xuất và phê duyệt các yêu cầu, tờ trình, hợp đồng thay cho giấy tờ truyền thống." }
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
// 5 nhóm, mỗi câu có q (câu hỏi) + a (câu trả lời).
const faqData = [
  {
    nhom: "Phần 1 — IPAG là ai?",
    cacCau: [
      { q: "Vì sao IPAG tồn tại?", a: "Sau 27 năm quan sát thị trường vốn Việt Nam, IPAG nhận thấy thị trường không thiếu vốn mà thiếu năng lực kết nối vốn với năng lực thực thi. IPAG được hình thành để kết nối nhiều năng lực thành sức mạnh tổng hợp, giúp doanh nghiệp Việt phát huy thế mạnh toàn diện và hướng tới wellbeing." },
      { q: "IPA Group là ai?", a: "IPA Group là Hệ sinh thái Wellbeing Việt Nam, niêm yết trên Sở Giao dịch Chứng khoán Hà Nội (HNX: IPA), với hơn 32 công ty thành viên và hơn 4.500 cán bộ nhân viên, vận hành theo mô hình Ngân hàng Năng lực." },
      { q: "IPAG khác gì so với ngân hàng hay công ty quản lý tài sản truyền thống?", a: "IPAG không cạnh tranh với ngân hàng thương mại (quản lý tiền) hay công ty quản lý tài sản (quản lý danh mục đầu tư). IPAG là một kiến trúc tổ chức mới, kiến tạo và kết nối năng lực của hệ sinh thái, đóng gói thành giải pháp toàn diện cho từng doanh nghiệp." },
      { q: "Mô hình Ngân hàng Năng lực (Capability Bank) là gì?", a: "Là mô hình tổ chức định hình lại cách IPAG đóng gói sản phẩm dịch vụ, kết nối bốn năng lực thiết yếu — công nghệ, quản trị, vốn và nguồn lực con người — qua bốn hạ tầng năng lực tích hợp." },
      { q: "Tầm nhìn của IPAG là gì?", a: "Mỗi người Việt trong cộng đồng Việt sống tỉnh thức và trọn vẹn mỗi ngày — qua một hệ sinh thái Wellbeing kết nối gia tài trí tuệ, mạng lưới tri thức và năng lực Việt toàn cầu." },
      { q: "Sứ mệnh của IPAG là gì?", a: "IPA Group đảm nhiệm sứ mệnh của một Ngân hàng Năng lực — kết nối Công nghệ, Con người và Chuỗi giá trị để khai thông dòng vốn cho doanh nghiệp Việt, kiến tạo giải pháp phát triển năng lực toàn diện, và cung ứng giải pháp cho cuộc sống tỉnh thức, trọn vẹn của cộng đồng người Việt." },
      { q: "IPAG Way gồm những giá trị cốt lõi nào?", a: "Bốn giá trị: <strong>I</strong> — Insight & Integration (Thấu hiểu và Tích hợp); <strong>P</strong> — Pathway & Partnership (Định hướng và Đồng hành); <strong>A</strong> — Action & Accountability (Hành động và Trách nhiệm); <strong>G</strong> — Greatness & Generation (Vượt trội và Xuyên thế hệ)." },
      { q: "IPAG vận hành qua bao nhiêu hạ tầng năng lực? Đó là gì?", a: "Bốn hạ tầng: IPA Solution (Công nghệ Số), IPA Management (Quản trị Doanh nghiệp), IPA Partners (Đầu tư), và IPA Living (Phân phối Wellbeing)." },
      { q: "IPA Living phân phối giải pháp Wellbeing theo mấy chiều?", a: "Ba chiều HWG: Sống Khỏe (Health) với Anvie Life, Homefood Macrobiotics, Ong Trung ương; Sống Giàu (Wealth) với VNDGO, VNDirect; Sống An (Grow) với PTIcare, bảo hiểm PTI." },
      { q: "Những dấu mốc quan trọng trong 27 năm phát triển của IPAG?", a: "1998: thành lập VTS (tiền thân IPAG); 2006: tham gia thành lập VNDirect; 2007-2008: mở rộng định chế tài chính; 2010-2015: củng cố nền tảng; 2016-2017: mở rộng sang bảo hiểm phi nhân thọ (PTI); 2021-2022: định hình mô hình Ngân hàng Năng lực; 2024: định hình ba trụ cột năng lực; 2025-2026: định vị Hệ sinh thái Wellbeing Việt Nam." }
    ]
  },
  {
    nhom: "Phần 2 — Bạn là ai trong hệ sinh thái",
    cacCau: [
      { q: "Các đơn vị trong IPAG vận hành độc lập hay kết nối với nhau?", a: "Các đơn vị không vận hành độc lập như công ty riêng lẻ, mà kết nối năng lực với nhau, chia sẻ hạ tầng chung làm đòn bẩy và cộng hưởng để cùng phát triển." },
      { q: "Con người được nhìn nhận như thế nào trong tổ chức?", a: "Con người là nguồn lực trung tâm và là tài sản chính của Ngân hàng Năng lực. Đầu tư vào con người là cam kết đầu tư dài hạn nhất của tổ chức." },
      { q: "Quyền và trách nhiệm của nhân viên được trao như thế nào?", a: "Mỗi người được trao thẩm quyền trong phạm vi của mình, đi cùng tinh thần làm chủ và chịu trách nhiệm với kết quả." },
      { q: "Giá trị công việc được đo bằng gì?", a: "Được đo bằng tác động tích cực tạo ra cho khách hàng, đội ngũ, cổ đông và cộng đồng — không bằng nỗ lực bỏ ra hay số lượng hoạt động." },
      { q: "Văn hóa EPIC là gì?", a: "Văn hóa EPIC — Empowering People to create Impact through Collaboration — là cách làm việc kết tinh tại IPAG, được giới thiệu chi tiết trong module <a onclick='switchModule(\"epic\")' class='text-link'>Văn hoá EPIC</a> và trong các chương trình đào tạo hội nhập." }
    ]
  },
  {
    nhom: "Phần 3 — Văn hoá EPIC",
    cacCau: [
      { q: "EPIC là viết tắt của gì?", a: "<strong>Empowering People to create Impact through Collaboration</strong> — Trao quyền cho con người để tạo ra tác động thông qua phương thức hợp tác tập thể." },
      { q: "E — Empowering nghĩa là gì?", a: "IPAG trao quyền cho tập thể đội ngũ cùng ra quyết định và cùng sở hữu kết quả, là điều kiện để con người khai phá tiềm năng nội lực và phát huy năng lực, trí tuệ tập thể." },
      { q: "P — People nghĩa là gì?", a: "Con người là nguồn lực trung tâm và tài sản chính của Ngân hàng Năng lực. IPAG đầu tư vào môi trường làm nghề và cơ hội trải nghiệm để mỗi người phát triển trí tuệ, tích lũy tri thức và khám phá năng lực tự thân." },
      { q: "I — Impact nghĩa là gì?", a: "Giá trị được đo bằng tác động tạo ra, không phải nỗ lực bỏ ra. Tác động tích cực tới wellbeing của khách hàng, đội ngũ, cổ đông và cộng đồng là mục đích công việc, đồng điệu với Action & Accountability trong IPAG Way." },
      { q: "C — Collaboration nghĩa là gì?", a: "Hợp tác là nguyên tắc vận hành của hệ sinh thái mở. Mỗi đơn vị — IPA Solution, IPA Management, IPA Partners, IPA Living — kết nối, chia sẻ và cộng hưởng giá trị với nhau qua Tích hợp, Hợp lực, Cộng sức và Cộng hưởng xuyên thế hệ." }
    ]
  },
  {
    nhom: "Phần 4 — Hành trình hội nhập",
    cacCau: [
      { q: "Lộ trình hội nhập (OB) kéo dài bao lâu?", a: "Lộ trình hội nhập kéo dài 60 ngày, là không gian để nhân viên mới định vị bản sắc, xây dựng kết nối và tạo ra tác động thực. Xem chi tiết tại <a onclick='switchModule(\"lo-trinh\")' class='text-link'>Lộ trình 60 ngày</a>." },
      { q: "Tuần 1 của lộ trình hội nhập tập trung vào điều gì?", a: "Hiểu hệ sinh thái và định vị vai trò cá nhân: đọc sổ tay hội nhập, tìm hiểu SOA (Span of Accountability) cùng FD Head và FC Head, gặp gỡ đội ngũ trong la bàn Dlink, xây dựng kế hoạch làm việc trong la bàn Dwork theo mốc 30-60 ngày." },
      { q: "Tuần 2-4 của lộ trình hội nhập gồm những hoạt động gì?", a: "Tham gia Company Onboarding, Job Onboarding; tìm hiểu cách đơn vị kết nối với hạ tầng khác; tham gia On-job training, mentor/coaching 1-1 cùng Buddy, FD Head, FC Head; thực hiện nhiệm vụ đầu tiên trong la bàn Dwork; thực hành Nền và Nếp của IPAG qua IPAC Reflect." },
      { q: "Tháng 2 của lộ trình hội nhập tập trung vào điều gì?", a: "Tăng tốc và ghi dấu: tìm nhịp điệu làm việc cá nhân, tối ưu hiệu suất tại nhiệm vụ FC; tham gia dự án OC khi được trao cơ hội; nhận diện 4 la bàn IPAG Compass sau 2 tháng hội nhập; xây dựng IDP (kế hoạch phát triển cá nhân) cho giai đoạn tiếp theo." },
      { q: "Có những chương trình đào tạo hội nhập nào?", a: "Company Onboarding và Job Onboarding. Xem danh sách khoá học tại <a onclick='switchModule(\"dao-tao\")' class='text-link'>Chương trình đào tạo</a>." }
    ]
  },
  {
    nhom: "Phần 5 — Nguồn lực hỗ trợ",
    cacCau: [
      { q: "FD Head là ai?", a: "Là người quản lý trực tiếp trong la bàn dGO, chịu trách nhiệm phát triển nhân viên mới về mặt chuyên môn và năng lực cốt lõi tại IPAG. Xem chi tiết tại <a onclick='switchModule(\"nguon-luc\")' class='text-link'>Mạng lưới đồng hành</a>." },
      { q: "Buddy là ai và vai trò là gì?", a: "Buddy là đồng nghiệp trong cùng team hoặc cùng chuyên môn, hỗ trợ nhân viên mới nhanh chóng hoà nhập, hiểu văn hoá, nắm bắt công việc và cảm thấy được chào đón. Thông tin chi tiết về Buddy được gửi trong thư chào mừng." },
      { q: "EPIC Partner là ai?", a: "Là cầu nối giữa nhân viên và bộ phận nhân sự, lắng nghe và hỗ trợ giải quyết các vấn đề liên quan đến nhân sự. Thông tin chi tiết được gửi trong thư chào mừng." },
      { q: "FC Manager / OC Manager đóng vai trò gì?", a: "Là người giao và dẫn việc, phụ trách công việc và phạm vi nhiệm vụ trong trục Dwork." },
      { q: "Khi cần hỗ trợ về đào tạo hội nhập, liên hệ đầu mối nào?", a: "Bộ phận IP (liên quan đến chương trình đào tạo hội nhập). Đầu mối liên hệ: <strong>Ms Hoàn Trần — hoan.tranthu@ipam.vn</strong>." }
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
    tieuDe: "Đọc nhanh trước, đào sâu sau",
    noiDung: "Module này có 6 phần — không cần đọc hết trong 1 lần.\n\n1. **Lượt 1:** đọc phần *Định vị* + *Tầm nhìn / Sứ mệnh* để có overview.\n2. **Lượt 2:** đọc *Mô hình vận hành* + *Kiến trúc 4 hạ tầng* khi bạn bắt đầu làm việc với các đơn vị khác.\n3. **Lượt 3:** đọc *27 năm* khi muốn hiểu rõ tổ chức đã đi qua những đâu.\n\nMẹo: tap vào con số ở đầu module để xem nhanh."
  },
  'vai-tro': {
    tieuDe: "Bạn không phải cấp dưới — bạn là một nguồn lực",
    noiDung: "Bốn nguyên lý ở module này không phải lời slogan. Đây là cách IPAG thực sự đối xử với từng cá nhân.\n\n- Khi bạn được giao một việc → đó là **trao quyền**, không phải chỉ thị.\n- Khi bạn báo cáo → tập trung vào **tác động** (impact), không phải số giờ bỏ ra.\n- Khi bạn thấy điều gì chưa đúng → bạn có **trách nhiệm** lên tiếng."
  },
  'epic': {
    tieuDe: "Đọc theo nhịp E-P-I-C, không cần thuộc lòng",
    noiDung: "EPIC Pocket Card chứa toàn bộ tinh thần văn hoá IPAG trong 1 trang.\n\n- **E** trao quyền → **P** vì con người → **I** đo bằng tác động → **C** thông qua hợp tác.\n- Mỗi khi gặp tình huống khó, tự hỏi: *điều này có giúp tạo Impact không? có Empower team không?*\n\nTải PDF gốc để in ra dán bàn làm việc."
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
    noiDung: "Thói quen nhỏ, lợi ích lớn:\n- Luôn bấm **Windows + L** để khoá màn hình mỗi khi rời khỏi chỗ ngồi (dù chỉ đi lấy nước).\n- Không chụp ảnh màn hình chứa dữ liệu nội bộ gửi qua Zalo / Facebook cá nhân.\n- Không cài phần mềm lạ — mọi yêu cầu cài đặt phải qua IT Service Desk.\n- Báo cáo thử việc nên chuẩn bị sớm từ tuần 6-7, không đợi tới phút cuối."
  },
  'nguon-luc': {
    tieuDe: "Nguyên tắc 'Hỏi đúng người'",
    noiDung: "- Chuyên môn, KPI, OKR công việc → Hỏi **FD Head**.\n- Văn hoá team, công cụ làm việc, mẹo hoà nhập → Hỏi **Buddy**.\n- Hợp đồng, lương, bảo hiểm, chế độ → Hỏi **EPIC Partner / CnB**.\n- Lỗi LMS, lộ trình đào tạo → Liên hệ **IP** (Ms Hoàn Trần — hoan.tranthu@ipam.vn).\n- Quy trình, sản phẩm, nhiệm vụ Dwork → Hỏi **FC / OC Manager**."
  },
  'glossary': {
    tieuDe: "Cách dùng từ điển hiệu quả",
    noiDung: "Từ điển có 2 phần:\n- **Thuật ngữ:** các từ viết tắt chuyên môn (FD, FS, ICM, BMI, SOA...).\n- **Pattern of Action (POA):** các nếp thực hành (IPAM Way, DIKW, SBI 48h, TAC, CAT).\n\nMẹo: gõ vào ô tìm kiếm phần đầu của từ (vd: 'SOA') để nhảy thẳng tới nơi cần. Không cần nhớ chính xác cả từ."
  },
  'faq': {
    tieuDe: "Cách tìm câu trả lời nhanh",
    noiDung: "FAQ chia làm 5 phần theo chủ đề.\n\n- Gõ vào ô tìm kiếm để lọc câu hỏi theo từ khoá (vd: 'EPIC', 'Buddy', 'báo cáo').\n- Nếu không tìm thấy câu trả lời, liên hệ **IP** (Ms Hoàn Trần — hoan.tranthu@ipam.vn) hoặc **EPIC Partner**."
  }
};
