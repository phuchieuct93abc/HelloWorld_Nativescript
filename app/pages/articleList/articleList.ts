import { Component, OnInit } from '@angular/core';
import Constants from '../../utils/constants';
import HttpUtils from '../../utils/httpUtis';
var parseString = require('nativescript-xml2js').parseString;



@Component({
  selector: "ArticleList",
  templateUrl: "./pages/articleList/articleList.html",
  providers: [HttpUtils]
})
export class ArticleListComponent implements OnInit {
  articleList:string
  constructor(private http: HttpUtils) {
    console.log(456);
   }
  ngOnInit(): void {
    console.log("start calling 1")
    this.http.get("https://m.baomoi.com/khoa-hoc-cong-nghe/trang1.epi?loadmore=1").subscribe(this.handleArticleListResponse)
  }
  handleArticleListResponse(response){
    response=`
<div data-aid="25194370" class="story story--video" data-track="|index104">
    <a class="story__link" href="/nhung-mon-qua-8-3-doc-dao-cua-cau-thu-xu-nghe/c/25194370.epi" title="Những món quà 8/3 độc đáo của cầu thủ xứ Nghệ">
        
        <div class="story__thumb">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://baomoi-photo-2-td.zadn.vn/w500_r1x2m/18/03/08/287/25194370/7_1175988.png.jpg" width="230" height="191" alt="Những món quà 8/3 độc đáo của cầu thủ xứ Nghệ">
        </div>
        
        <h2 class="story__heading">Những món quà 8/3 độc đáo của cầu thủ xứ Nghệ</h2>
        <p class="story__meta">
            <span class="source">Nghệ An</span>
            <time class="friendly" datetime="2018-03-08T19:45:00+07:00"></time>
        </p>
        <p class="story__summary">
            Trong ngày Quốc tế phụ nữ 8/3, Phạm Xuân Mạnh và Bùi Tiến Dũng dành trọn tình cảm cho người mẹ của mình. Còn...
        </p>
    </a>
    <p class="story__tools">
        
        <a>1 liên quan</a>
        
        <button>
            <i class="spr spr--like"></i>
            <span>0</span>
        </button>
    </p>
</div>

    `
  



  }
}