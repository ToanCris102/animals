"use strict";

// const detail ={
//   "conservationStatusAccording": {
//     "IUCN": "LC (Least concern)",
//     "vietnamIsRedBook": "Sắp nguy cấp",
//     "decree32_2006_NDCP": "Không nằm trong danh mục bảo tồn",
//     "CITES_40_2013_TT_BNNPTNT": "Không có trong danh mục"
//   },
//   "_id": "62435cae0e19ff39be631b00",
//   "timestamp": "2018-08-04T07:07:15.000Z",
//   "scienceName": "Ichthyophis nguyenorum Nishikawa, Matsui, and Orlov, 2012",
//   "vietnameseName": "Ếch giun nguyễn",
//   "namePlate": "Rắn trun đĩa",
//   "gender": "Động vật (Animalia)",
//   "phylum": "Động vật có dây sống (chordata)",
//   "grade": "AMPHIBIA (Linnaeus, 1758)",
//   "set": "GYMNOPHIONA (Muller, 1832)",
//   "family": "Ichthyophiidae Taylor, 1968",
//   "imageOrVideo": [
//   "https://drive.google.com/open?id=1SPt5-5-Eu5eLhNXVGMijMrIqagolFZ4i",
//   "https://drive.google.com/open?id=1g08XkVrfOuc6Fx7YDp6eA6j14XZnv1Ck",
//   "https://drive.google.com/open?id=1G_ygNQQ1GGmHk1AA8y7H5jowamzBUN6g",
//   "https://drive.google.com/open?id=1P8mqWYHDDg3gYo65RSS8h8vNiY3DsHTr",
//   "https://drive.google.com/open?id=14bhLrXAcrHEU9DyzHabr4kwErBCvOZqw"
//   ],
//   "descriptionOfMorphologicalFeatures": "Đặc điểm chẩn loại: cơ thể tròn, dẹt mặt bụng; chóp đuôi cùn, không có dạng mũ; không có đốm màu vàng mặt bụng; đầu rộng nhất ở góc mép miệng, hẹp dần về trước; mút mõm tròn; lỗ mũi nằm gần bờ trước mép miệng; số vòng quanh thân: 312 – 318; sọc vàng rộng chạy liên tục từ sau mắt đến huyệt (Nishikawa et al.,2012). \n\tĐặc điểm hình thái: SVL 201,3 mm. Dài đuôi: 2,6 – 3,5; rộng đuôi: 2,8 – 3,5. Rộng đầu (HW: 6,6). Dài đầu hơn rộng đầu (HL/HW: 1,25-1,47). Cơ thể hơi tròn, dài, dạng rắn. Đầu dẹp, láng; rộng nhất ở mép miệng, hẹo về phía đầu. Mút mõm tròn; dài mõm bằng với ngang đầu ở vị trí mắt. Mắt nhỏ, không mi mắt, có một đôi râu (tentacle) ngắn nằm phía trước mắt. Hai bên thân có sọc  màu vàng bắt đầu từ sau mép miệng đến lỗ huyệt. Số nếp gấp quanh thân: 280 – 300; ở đuôi: 7-8. Đuôi ngắn hơi dẹt ở mặt bụng, phần đỉnh cùn, không có đốm màu cam hay vàng  ở mặt bụng. Mặt lưng có màu tím đen, bụng màu hoa cà nhạt, hai bên sườn có sọc màu vàng liên tục, không đứt quãng, chạy từ khoảng giữa hàm trên (mấu xúc - tu) đến gần mút đuôi. Mắt có viền mỏng màu trắng đục.\n\tGhi chú:  Loài Ichthyophis bannanicus phân biệt với Ichthyophis nguyenorum dựa trên các đặc điểm: số nếp vòng quanh cơ thể của I. nguyenorum (312 – 318) ít hơn so với I. bannanicus (340); sọc bên thân của I. nguyenorum kéo dài đến mút đuôi so với sọc bị đứt quãng ở phía sau đuôi của I. bannanicus Nishikawa et al. (2012).",
//   "ecologicalDescription": "Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục, hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất, nhện và những loài không xương sống nhỏ khác.",
//   "useValue": "Chưa xác định",
//   "distribution": "Phổ biến",
//   "coordinates": [
//   "9.571639 N, 105.748757 E ",
//   "9.563858 N, 105.742898 E",
//   "9.572843 N, 105.745688 E",
//   "9.571639 N, 105.748757 E",
//   "9.571639 N, 105.748757 E"
//   ],
//   "sampleStatus": "Thu được mẫu",
//   "habitat": "Rừng tràm đặc dụng,  rừng tràm trồng",
//   "location": "Rừng Tràm Mỹ Phước, Mỹ Phước, Mỹ Tú, Sóc Trăng.",
//   "sampleCollectionDate": "4/13/2018",
//   "sampleCollector": "Nguyễn Quang Cường"
// }
var _id = localStorage.getItem("id");

var data = fetch('https://dev-web-animals.herokuapp.com/animal/' + _id).then(function (response) {
  return response.json();
}).then(function (detail) {
  document.getElementById("title-text").innerHTML = detail.namePlate + "_" + detail.vietnameseName + "<br>" + " (" + detail.scienceName + ")";
  document.getElementById('gioi').innerHTML = "<strong>Giới: </strong>" + detail.gender;
  document.getElementById("nganh").innerHTML = "<strong>Ngành: </strong>" + detail.phylum;
  document.getElementById("lop").innerHTML = "<strong>Lớp: </strong>" + detail.grade;
  document.getElementById("bo").innerHTML = "<strong>Bộ: </strong>" + detail.set;
  document.getElementById("ho").innerHTML = "<strong>Họ: </strong>" + detail.family;
  document.getElementById("IUCN").innerHTML = "<strong>Tình trạng bảo tồn theo IUCN: </strong>" + detail.conservationStatusAccording.IUCN;
  document.getElementById("redVN").innerHTML = "<strong>Tình trạng bảo tồn theo sách đỏ Việt Nam: </strong>" + detail.conservationStatusAccording.vietnamIsRedBook;
  document.getElementById("32_2006").innerHTML = "<strong>Tình trạng bảo tồn theo Nghị định 32/2006/NĐCP: </strong>" + detail.conservationStatusAccording.decree32_2006_NDCP;
  document.getElementById("40_2013").innerHTML = "<strong>Tình trạng bảo tồn theo CITES (40/2013/TT-BNNPTNT): </strong>" + detail.conservationStatusAccording.CITES_40_2013_TT_BNNPTNT;
  document.getElementById("DOMC").innerHTML = detail.descriptionOfMorphologicalFeatures;
  document.getElementById("ED").innerHTML = detail.ecologicalDescription;
  document.getElementById("sampleCollector").innerHTML = "Người thu mẫu: " + detail.sampleCollector;
  document.getElementById("sampleCollectionDate").innerHTML = "Ngày thu mẫu: " + detail.sampleCollectionDate;
  document.getElementById("distribution").innerHTML = "Phân bố: " + detail.distribution;
  document.getElementById("sampleStatus").innerHTML = "Tình trạng mẫu vật: " + detail.sampleStatus;
  var image = document.getElementById("image");
  var imageVideo = [];
  detail.imageOrVideo.map(function (element) {
    if (element != null) {
      element = element + "/preview";
      imageVideo.push(element.replace("open?id=", "file/d/"));
    }
  });
  var i = 0;
  setInterval(function () {
    image.src = imageVideo[i];
    i++;
    if (i >= imageVideo.length) i = 0;
  }, 5000);
}); // https://drive.google.com/open?id=1SPt5-5-Eu5eLhNXVGMijMrIqagolFZ4i
// https://drive.google.com/file/d/1SPt5-5-Eu5eLhNXVGMijMrIqagolFZ4i

var map = document.getElementById("google-map");
console.log(document.location.href);
var link = getUrlParameter();

function getUrlParameter(name, urlweb) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(urlweb);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

;