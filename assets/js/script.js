var content_img = document.querySelectorAll('#img-selector');

window.onload = function(){
    setTimeout("switchImage()", 5000);
    setTimeout("switchAnimals()",10000);
}

function switchImage(){

    var a = Math.floor(Math.random() * 11);

    var b = a + 1 ;
    var c = a + 2 ;
    var d = a + 3 ;

    if( b > 10) b = b - 10;

    if( c > 10) c = c - 10;

    if( d > 10) d = d - 10;

    content_img[0].src = './assets/picture/' + a + '.jpeg';

    content_img[1].src = './assets/picture/' + b + '.jpeg';

    content_img[2].src = './assets/picture/' + c + '.jpeg';

    content_img[3].src = './assets/picture/' + d + '.jpeg';

    setTimeout("switchImage()", 5000);
}

function switchAnimals() {
    begin++;
    animalRender.innerHTML = arr[begin];
    if(begin < end) setTimeout("switchAnimals()",10000);
    else if(begin == end ){
        begin = 0;
        setTimeout("switchAnimals()",10000);
    } 
}
//---------------------------------------------------
var animals = [
    {
        id: 1,
        img: './assets/animals/1.jpeg',
        name: 'Ếch Giun Nguyễn',
        ddhinhthai: 'Đặc điểm chẩn loại: cơ thể tròn, dẹt mặt bụng; chóp đuôi cùn, không có dạng mũ; không có đốm màu vàng mặt bụng; đầu rộng nhất ở góc mép miệng, hẹp dần về trước; mút mõm tròn; lỗ mũi nằm gần bờ trước mép miệng; số vòng quanh thân: 312 – 318; sọc vàng rộng chạy liên tục từ sau mắt đến huyệt (Nishikawa et al.,2012). \n\tĐặc điểm hình thái: SVL 201,3 mm. Dài đuôi: 2,6 – 3,5; rộng đuôi: 2,8 – 3,5. Rộng đầu (HW: 6,6). Dài đầu hơn rộng đầu (HL/HW: 1,25-1,47). Cơ thể hơi tròn, dài, dạng rắn. Đầu dẹp, láng; rộng nhất ở mép miệng, hẹo về phía đầu. Mút mõm tròn; dài mõm bằng với ngang đầu ở vị trí mắt. Mắt nhỏ, không mi mắt, có một đôi râu (tentacle) ngắn nằm phía trước mắt. Hai bên thân có sọc  màu vàng bắt đầu từ sau mép miệng đến lỗ huyệt. Số nếp gấp quanh thân: 280 – 300; ở đuôi: 7-8. Đuôi ngắn hơi dẹt ở mặt bụng, phần đỉnh cùn, không có đốm màu cam hay vàng  ở mặt bụng. Mặt lưng có màu tím đen, bụng màu hoa cà nhạt, hai bên sườn có sọc màu vàng liên tục, không đứt quãng, chạy từ khoảng giữa hàm trên (mấu xúc - tu) đến gần mút đuôi. Mắt có viền mỏng màu trắng đục.\n\tGhi chú:  Loài Ichthyophis bannanicus phân biệt với Ichthyophis nguyenorum dựa trên các đặc điểm: số nếp vòng quanh cơ thể của I. nguyenorum (312 – 318) ít hơn so với I. bannanicus (340); sọc bên thân của I. nguyenorum kéo dài đến mút đuôi so với sọc bị đứt quãng ở phía sau đuôi của I. bannanicus Nishikawa et al. (2012).',
        ddsinhthai: 'Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác.',
        iucn: 'LC (Least concern)',
        redbook: 'Sắp Nguy Cấp'
    },
    {
        id: 2,
        img: './assets/animals/2.jpeg',
        name: 'Cóc Nhà',
        ddhinhthai: 'Đặc điểm chẩn loại: Kích thước cơ thể trung bình, mắt khỏe; phía trên ổ mắt, phía sau ổ mắt, phía trên màng nhĩ và phía trước mắt có nhiều gai nhọn; mõm nhọn, tuyến mang tai lớn, có chều dài hơn chiều rộng; cơ thể có nhiều nốt sần lớn và nhỏ; ngón tay thứ I dài hơn ngón tay thứ II; khớp cổ chân chạm giữa tuyến mang tai khi xếp dọc theo thân',
        ddsinhthai: 'Duttaphrynus melanostictus là loài phổ biến, được bắt gặp trên habitat rừng tràm đặc dụng, rừng tràm khai thác; phân bố rộng khắp khu vực khảo sát .Là loài hoạt động về đêm, kiếm mồi trên nền rừng và trú ngụ trong các hốc cây. Đầu mùa mưa thường tập trung ở các vũng nước đọng trong khu vực và các con đực gọi bạn tình suốt từ tối đến khoảng 8 giờ sáng.',
        iucn: 'Không có giá trị bảo tồn.',
        redbook: 'Không có giá trị bảo tồn.'
    },
    {
        id: 3,
        img: './assets/animals/3.jpeg',
        name: 'Nhái Bầu Heymon',
        ddhinhthai: 'Kích thước cơ thể nhỏ; lưng phẳng, màu xám hoặc nâu ở trên, thường có đường kẻ giữa lưng và một hoặc 2 đốm đen ở ngay trung tâm của lưng. Mặt bên của đầu và thân có vệt đen kéo dài đến háng. Màng nhĩ ẩn; ba củ bàn tay lớn và rõ ràng; kích thước gần bằng nhau. Hai củ bàn chân, củ bàn ngoài lớn hơn. Màng bơi giữa các ngón nhỏ và mảnh. Đầu ngón mở rộng thành các đĩa',
        ddsinhthai: 'Vào mùa mưa, các các thể của Microhyla heymonsi thường được tìm thấy trên nền rừng, trên các thảm lá mục hoặc cỏ. Chúng thường tập trung nhiều ở các vũng nước đọng hoặc các khu vực ngập nước cạn vào mùa mưa. Con đực cótiếng kêu đặc trưng nhờ túi âm ở cổ họng. Các habitat trong khu vực có sự hiện diện của loài này gồm rừng tràm đặc dụng và rừng tràm khai thác.',
        iucn: 'Không có giá trị bảo tồn.',
        redbook: 'Không có giá trị bảo tồn.'
    },
    {
        id: 4,
        img: './assets/animals/4.jpeg',
        name: 'Nhái Bầu Heymon',
        ddhinhthai: 'Kích thước cơ thể nhỏ; lưng phẳng, màu xám hoặc nâu ở trên, thường có đường kẻ giữa lưng và một hoặc 2 đốm đen ở ngay trung tâm của lưng. Mặt bên của đầu và thân có vệt đen kéo dài đến háng. Màng nhĩ ẩn; ba củ bàn tay lớn và rõ ràng; kích thước gần bằng nhau. Hai củ bàn chân, củ bàn ngoài lớn hơn. Màng bơi giữa các ngón nhỏ và mảnh. Đầu ngón mở rộng thành các đĩa',
        ddsinhthai: 'Vào mùa mưa, các các thể của Microhyla heymonsi thường được tìm thấy trên nền rừng, trên các thảm lá mục hoặc cỏ. Chúng thường tập trung nhiều ở các vũng nước đọng hoặc các khu vực ngập nước cạn vào mùa mưa. Con đực cótiếng kêu đặc trưng nhờ túi âm ở cổ họng. Các habitat trong khu vực có sự hiện diện của loài này gồm rừng tràm đặc dụng và rừng tràm khai thác.',
        iucn: 'Không có giá trị bảo tồn.',
        redbook: 'Không có giá trị bảo tồn.'
    },
    {
        id: 5,
        img: './assets/animals/5.jpeg',
        name: 'Chàng Xanh',
        ddhinhthai: 'Cơ thể có kích thước tương đối lớn, thường có màu xanh với nếp gấp da trên lưng rộng màu vàng, dảy màu đen ở mặt bên của đầu và cơ thể, mũi nhọn và nhô ra, ngón tay mảnh khảnh, ngón thứ nhất hơi ngắn hơn ngón thứ 2, ngón chân gần như có màng bao phủ hoàn toàn, đĩa nhỏ trên đầu ngón, cổ chân chạm chóp mũi, không có hoa văn vòng quanh chi nhưng có các dấu song song chân, có túi thanh âm, con đực có chai sinh dục trên ngón tay thứ 1.',
        ddsinhthai: 'Chàng xanh được tìm thấy trên các habitat rừng tràm đặc dụng, rừng dừa nước và lung ở Rừng tràm Mỹ Phước. Là loài hoạt động về đêm, chúng được tìm thấy nhiều vào mùa mưa ở ven các kênh nước, ao nước nhỏ, trên lớp thực vật nổi hoặc cả trên cành cây cách mặt đất từ 1-1,5m.',
        iucn: 'Không có giá trị bảo tồn.',
        redbook: 'Không có giá trị bảo tồn.'
    }

]

const data = fetch('https://dev-web-animals.herokuapp.com/animal/list')
  .then(response => response.json())
  .then(result => {
    let gioidongvat = []
    var hodongvat = []
    var nganhdongvat = []
    var lopdongvat = []
    var bodongvat = []
    result.map( (element) => {
        if(!gioidongvat.includes(element.gender)){
        gioidongvat.push(element.gender)
        }
        if(!nganhdongvat.includes(element.phylum)){
            nganhdongvat.push(element.phylum)
        }
        if(!lopdongvat.includes(element.grade)){
            lopdongvat.push(element.grade)
        }
        if(!hodongvat.includes(element.family)){
            hodongvat.push(element.family)
        }
        if(!bodongvat.includes(element.set)){
            bodongvat.push(element.set)
        }
    })   

    gioi.innerHTML = renderGioi(gioidongvat);
    ho.innerHTML = renderHo(hodongvat);
    nganh.innerHTML =renderNganh(nganhdongvat);
    lop.innerHTML = renderLop(lopdongvat);
    bo.innerHTML = renderBo(bodongvat);
});

var gioi = document.getElementById('gioi-animal');
var nganh = document.getElementById("nganh-animal");
var lop = document.getElementById("lop-animal");
var ho = document.getElementById("ho-animal");
var bo = document.getElementById("bo-animal");

function render(animals){
    var html = [];
    for(var i=0; i< animals.length; i++){
        html[i] = '<div class="infor-animal"><img src="'+ animals[i].img +'" width="100%"></div><div class="table-search"><div class="search-name">'+ animals[i].name +'</div><div class="search-inf"><div class="mg-top-10 box-infor"><i class="ti-minus pdleft-4"></i>Mô Tả Đặc Điểm Hình Thái:<div class="box-text">'+ animals[i].ddhinhthai +'</div></div><div class="mg-top-10 box-infor"><i class="ti-minus pdleft-4"></i>Mô Tả Đặc Điểm Sinh Thái:<div class="box-text">'+ animals[i].ddsinhthai +'</div></div><div class="mg-top-10 box-infor"><i class="ti-minus pdleft-4"></i>Tình Trạng Bảo Tồn:<div class="box-text">Theo IUCN: '+ animals[i].iucn +'</div><div class="box-text">Theo RedBook: '+ animals[i].redbook +'</div></div></div></div>';
    }
    return html;
}

function renderGioi(gioidongvat){
    var html = '<option selected> All</option>';
    for(var i=0;i<gioidongvat.length ;i++){
        html = html + '<option value="1">'+ gioidongvat[i] +'</option>';
    }

    return html;
}

function renderHo(hodongvat){
    var html = '<option selected> All</option>';
    for(var i=0;i<hodongvat.length ;i++){
        html = html + '<option value="1">'+ hodongvat[i] +'</option>';
    }

    return html;
}

function renderNganh(nganhdongvat){
    var html = '<option selected> All</option>';
    for(var i=0;i<nganhdongvat.length ;i++){
        html = html + '<option value="1">'+ nganhdongvat[i] +'</option>';
    }

    return html;
}

function renderLop(lopdongvat){
    var html = '<option selected> All</option>';
    for(var i=0;i<lopdongvat.length ;i++){
        html = html + '<option value="1">'+ lopdongvat[i] +'</option>';
    }

    return html;
}

function renderBo(bodongvat){
    var html = '<option selected> All</option>';
    for(var i=0;i<bodongvat.length ;i++){
        html = html + '<option value="1">'+ bodongvat[i] +'</option>';
    }

    return html;
}

//----------------------------------------
function clickA(){
    animalRender.style.display = "none";
    animalSearch.style.display = "block";
}

function clickB(){
    animalRender.style.display = "block";
    animalSearch.style.display = "none";
}

var animalRender = document.getElementById('animals-render');
var animalSearch = document.getElementById('animals-search');

var arr = new Array;
arr = render(animals);
var begin = 0;
var end = animals.length-1;
animalRender.innerHTML = arr[0];


const textSearch = document.getElementById("tip-search")
// textSearch.addEventListener('keyup', function (){
//     console.log(textSearch.value)
// })
textSearch.addEventListener('keyup', clickC)
function clickC(){
    clickA()
    var gioiAnimal = gioi.options[gioi.selectedIndex].text;
    var nganhAnimal = nganh.options[nganh.selectedIndex].text;
    var lopAnimal = lop.options[lop.selectedIndex].text;
    var hoAnimal = ho.options[ho.selectedIndex].text;
    var boAnimal = bo.options[bo.selectedIndex].text;

    var selectAnimal = {
        key: textSearch.value == '' ?  'null' : textSearch.value ,
        gender: gioiAnimal,
        phylum: nganhAnimal,
        grade: lopAnimal,
        family: hoAnimal,
        set: boAnimal
    };
    fetch(`https://dev-web-animals.herokuapp.com/animal/${selectAnimal.key}/${selectAnimal.gender}/${selectAnimal.phylum}/${selectAnimal.grade}/${selectAnimal.family}/${selectAnimal.set}`)
    .then(response => response.json())
    .then(data => {        
        var wrap = document.getElementById("wrap-result")  
        while (wrap.firstChild) {
            wrap.removeChild(wrap.lastChild);
        }        
        localStorage = null
        document.getElementById("result-conttend").innerHTML = ((data.length > 0) ? data.length : "0")  + ((data.length < 2 ) ? " Result" : " Results")
        data.map(element => {           
            
            const imageVideo = []
            element.imageOrVideo.map(result => {
                if(result != null){
                    result = result + "/preview"
                    imageVideo.push(result.replace("open?id=", "file/d/"))
                }                
            })
        
            var div0 = document.createElement("div")
            div0.setAttribute("class","resual-animal col-6")     
            var div1 = document.createElement("div")
            div1.setAttribute("class", "resual-img")
            var img = document.createElement("iframe")        
            img.style.height = "150px"
            div1.appendChild(img)
            var div2 = document.createElement("div")
            div2.setAttribute("class", "resual-inf")           
            var div3 = document.createElement("div")
            div3.setAttribute("class", "mg-bottom-4")
            var linknode = document.createElement("a")        
            div3.appendChild(linknode)
            var div4 = document.createElement("div")
            div4.setAttribute("class", "text-over-1line mg-bottom-4 name--")
            var div5 = document.createElement("div")
            div5.setAttribute("class", "mg-bottom-4 name--")
            var div6 = document.createElement("div")
            div6.setAttribute("class", "mg-bottom-4 name--")
            div2.appendChild(div3)
            div2.appendChild(div4)
            div2.appendChild(div5)
            div2.appendChild(div6)
            div0.appendChild(div1)
            div0.appendChild(div2)                  
            wrap.appendChild(div0)


            // set apia
            //hinh anh
            img.src = imageVideo[0]
            //ten tieng anh
            linknode.innerText = element.scienceName
            //linknode.target = "_blank"
            //linknode.href =            
            linknode.setAttribute('class', element._id)
            linknode.addEventListener('click', function (){
                localStorage.setItem("id", this.getAttribute('class'))
                window.open("https://toancris102.github.io/animals/search_detail.html", "_blank" )
                
            })
            
           
            // tên tieng viet
            div4.innerHTML = element.vietnameseName || ''
            // Moi Truong song 
            div5.innerHTML = element.habitat || ''
            //Tim thay 
            div6.innerHTML = element.location || ''
            
        })
        
    })
    .catch((error) => {
        //console.log(error);
    });
    //console.log(selectAnimal)
}

{/* <div class="resual-animal col-6">
    <div class="resual-img">
        <img src="./assets/animals/1.jpeg" height="150px">
    </div>
    <div class="resual-inf">
        <div class="mg-bottom-4"><a href="">Ichthyophis nguyenorum Nishikawa, Matsui, and Orlov, 2012</a></div>
        <div class="text-over-1line mg-bottom-4 name--">Tên Việt Nam: Giun</div>
        <div class="mg-bottom-4 name--">Môi Trường Sống: Rừng tràm đặc dụng, rừng tràm trồng</div>
        <div class="mg-bottom-4 name--">Tìm Thấy Ở: Rừng Tràm Mỹ Phước, Mỹ Phước, Mỹ Tú, Sóc Trăng</div>
    </div>
</div> */}