
let slideIndex = 0;
slideShow();
function slideShow()
            { 
                var slides=document.getElementsByClassName("moviePoster");
                for ( var i = 0; i < slides.length; i++) 
                {
                    slides[i].style.display = 'none';
                }
                slideIndex++;
                if (slideIndex > slides.length)
                 {
                     slideIndex = 1;
                 }
                 slides[slideIndex-1].style.display = 'block';
                setTimeout(slideShow, 2000);
            };


if(localStorage.getItem('movies')==null)
{
    var movieList=[
        {
            name:"Extraction",
            release:"01-04-2022",
            poster:"https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaUD92whdwqVnEPh5fMHOBL5vext3SdEnKXR03ZDZ7on7yhm0es-61Q_70kKhas_PtfHMDD49bJJ4F3w015XiAFW7H9cDUzEDl8TFSKPAHWhImqoatBUPOMxuj2N.jpg?r=1f7",
            IMDbrating: 7.5,
        },
        {
            name:"Lucy",
            release:"01-04-2022",
            poster:"https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTm46V-Ejp87dweD6QMuTN71cEbU57omed2hpkacVD8ZDx1KsHkzx7vg6BdyTyPv_4GsS5n9Ixck2FDfT0M0f8JyhEY.jpg?r=014",
            IMDbrating:7.2,
        },
        {
            name:"The Meg",
            release:"01-04-2022",
            poster:"https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXJ-16yEPu11ncnGifBzphRCuWWgIXcCM50aXR1_xlmTpRSwzh4dplPEqwQ6fZi8_6hzFBgHzFuKzEcN6W6dbKux2JU.jpg?r=655",
            IMDbrating:7.0,
        },
        {
            name:"Dolittle",
            release:"01-04-2022",
            poster:"https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABauGRbGybhE9R80G3ZePFsvpVviD6n_aIZ73vJJg_hkkspmMM2lDDFr_XTqQS4V30zL0D-w5D3X_M-P5GTMBVTVZAqc.jpg?r=17f",
            IMDbrating:6.9,
        },
        {
            name:"Angry Birds",
            release:"01-04-2022",
            poster:"https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABauGRbGybhE9R80G3ZePFsvpVviD6n_aIZ73vJJg_hkkspmMM2lDDFr_XTqQS4V30zL0D-w5D3X_M-P5GTMBVTVZAqc.jpg?r=17f",
            IMDbrating:6.8,
        },
        {
            name:"Pursuit Of Happiness",
            release:"01-04-2022",
            poster:"https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYLU37VnnakHF_mDqTljD3Wd9sARgCb8VH-Ado4WiQBCOhBA_PbRkm5TdZlh1WC5Rx7Cf9TCx124YVQ71nHSh_Mv61s.jpg?r=c7f",
            IMDbrating:8.0,
        },
        {
            name:"Catch Me if You Can",
            release:"01-04-2022",
            poster:"https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe1xq50JC_AJbrvYrHq00ZXaDm3CQvx4nDGUlAy5BpUYo54Ym-JKN80y8pj8dD0a9-0_jzJliRaEaXyILTaazLnj9vo.jpg?r=985",
            IMDbrating:7.9,
        },
        {
            name:" M I B",
            release:"01-04-2022",
            poster:"https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWf0EpAQDTAc0Dx5OjuD0RUHwBV6_-0XPV40T-5BHx-oZcMRR92QGV2yWCz1QHDvSV42DIZOaUYooqsu8bPVnYX8BBI.jpg?r=9ca",
            IMDbrating:7.1,
        },
        {
            name:"Kung Fu Panda 2",
            release:"01-04-2022",
            poster:"https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYmqBoX-O5gBdKefvlXmnXN7qlOkj4AtqwvooBsVA2occWdPT0SxKZMrF0AkY3WxkzFgQtjCLPOdbZX6VkezKON3-o8.jpg?r=0db",
            IMDbrating:8.1,
        },
    ]; 
    localStorage.setItem('movies',JSON.stringify(movieList))
}
var movieList=JSON.parse(localStorage.getItem('movies'))
displayData(movieList);
function displayData(data)
{
    document.getElementById("movies").innerHTML="";
    data.forEach(function(element)
    { 
    var movieCard=document.createElement('div');
    var moviePoster=document.createElement('img');
    moviePoster.src=element.poster;
    var name=document.createElement('h2');
    name.textContent=element.name;
    var releaseDate=document.createElement('h3');
    releaseDate.innerText="Release Date : "+ element.release;
    var rating=document.createElement('h3');
    rating.innerText="Rating :" + element.IMDbrating;
    movieCard.append(moviePoster,name,releaseDate,rating);
    document.getElementById("movies").append(movieCard);
    })
}
document.getElementById("sortBtn").addEventListener('change',dataSortrate);
function dataSortrate()
{  
    var sortData=document.getElementById("sortBtn").value;
    
    movieList.sort(function(a,b)
    {
       if(sortData=='lowtohi')
       {
           return a.IMDbrating-b.IMDbrating;
       } 
       else if(sortData=='hightolo')
       {
           return b.IMDbrating-a.IMDbrating;

       }
    });
    displayData(movieList);
}