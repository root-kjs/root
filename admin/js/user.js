// 관리자 > 회원목록
usersList();
function memberList(){  console.log( '관리자 > 회원목록' ); 

    // 배열 호출
    let productList = getProducts();

    // 변수
    const tbody = document.querySelector( 'table tbody' );
    let html ='';

    // 배열 순회
    for( let i = 0; i <= productList.length - 1; i++ ){
        let product = productList[i];

        html += `<tr>
                <td><img src="${ product.pimg }" /></td>
                <td>${ product.pname }</td>
                <td>${ product.pprice }</td>
                <td>${ product.pmemo }</td>
                <td><button onclick="productDelete(${ product.pno })"> 삭제 </button></td>
            </tr>
        `
    }
    tbody.innerHTML = html; 
} // usersList(); end
