var baneStartX = 100;
var baneStartY = 100;
var baneStartHeading = 3.14 / 2;
var ending;
function createBane() {
    cKantX = baneStartX
    cKantY = baneStartY

    //Venstre side
    new Kant(baneStartX - 50, baneStartY - 50, 50, -50)
    new Kant(cKantX, cKantY, 100, 30)
    new Kant(cKantX, cKantY, 70, 30)
    new Kant(cKantX, cKantY, 250, 20)
    new Kant(cKantX, cKantY, 150, -20)
    new Kant(cKantX, cKantY, 150, 0)
    new Kant(cKantX, cKantY, 150, -10)
    new Kant(cKantX, cKantY, 150, 10)
    new Kant(cKantX, cKantY, 90, 50)
    new Kant(cKantX, cKantY, 70, 70)
    new Kant(cKantX, cKantY, 35, 90)
    new Kant(cKantX, cKantY, 0, 90)
    new Kant(cKantX, cKantY, -20, 70)
    new Kant(cKantX, cKantY, -40, 70)
    new Kant(cKantX, cKantY, -100, 50)
    new Kant(cKantX, cKantY, -100, 20)
    new Kant(cKantX, cKantY, -100, -10)
    new Kant(cKantX, cKantY, -100, -10)
    new Kant(cKantX, cKantY, -100, 0)
    new Kant(cKantX, cKantY, -100, -20)
    new Kant(cKantX, cKantY, -200, -20)
    new Kant(cKantX, cKantY, -100, -20)
    new Kant(cKantX, cKantY, -100, -20)
    new Kant(cKantX, cKantY, -100, -10)
    new Kant(cKantX, cKantY, -100, -5)
    new Kant(cKantX, cKantY, -100, -5)
    new Kant(cKantX, cKantY, -100, -20)
    new Kant(cKantX, cKantY, -50, -60)
    new Kant(cKantX, cKantY, 0, -320)
    new Kant(cKantX, cKantY, 50, -80)
    new Kant(cKantX, cKantY, 30, -80)
    new Kant(cKantX, cKantY, 60, -60)
    new Kant(cKantX, cKantY, 80, -40)
    new Kant(cKantX, cKantY, 120, -50)
    new Kant(cKantX, cKantY, 120, -20)
    new Kant(cKantX, cKantY, 300, -7)
    new Kant(cKantX, cKantY, 150, 0)
    new Kant(cKantX, cKantY, 150, 10)
    new Kant(cKantX, cKantY, 150, -10)
    new Kant(cKantX, cKantY, 70, -20)
    new Kant(cKantX, cKantY, 70, -50)
    new Kant(cKantX, cKantY, 40, -80)
    new Kant(cKantX, cKantY, 50, -80)
    new Kant(cKantX, cKantY, 50, -30)
    new Kant(cKantX, cKantY, 90, -15)
    new Kant(cKantX, cKantY, 90, 5)
    new Kant(cKantX, cKantY, 150, 65)
    new Kant(cKantX, cKantY, 90, 95)
    new Kant(cKantX, cKantY, 20, 155)
    new Kant(cKantX, cKantY, 0, 155)
    new Kant(cKantX, cKantY, -10, 115)
    new Kant(cKantX, cKantY, -40, 415)
    new Kant(cKantX, cKantY, -40, 90)
    new Kant(cKantX, cKantY, -40, 60)
    new Kant(cKantX, cKantY, -40, 30)
    new Kant(cKantX, cKantY, -90, 70)
    new Kant(cKantX, cKantY, -90, 30)
    new Kant(cKantX, cKantY, -90, 30)
    new Kant(cKantX, cKantY, -90, 10)
    new Kant(cKantX, cKantY, -90, 10)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)



    //Højre side
    new Kant(baneStartX - 50, baneStartY + 50, 50 - (cKantX - baneStartX), 50 - (cKantY - baneStartY))
    new Kant(cKantX, cKantY, 75, 50)
    new Kant(cKantX, cKantY, 50, 50)
    new Kant(cKantX, cKantY, 250, 70)
    new Kant(cKantX, cKantY, 250, -30)
    new Kant(cKantX, cKantY, 150, -50)
    new Kant(cKantX, cKantY, 50, -20)
    new Kant(cKantX, cKantY, 50, -5)
    new Kant(cKantX, cKantY, 50, 10)
    new Kant(cKantX, cKantY, 40, 25)
    new Kant(cKantX, cKantY, 35, 40)
    new Kant(cKantX, cKantY, 15, 40)
    new Kant(cKantX, cKantY, 05, 30)
    new Kant(cKantX, cKantY, -5, 30)
    new Kant(cKantX, cKantY, -30, 30)
    new Kant(cKantX, cKantY, -100, 10)
    new Kant(cKantX, cKantY, -100, 15)
    new Kant(cKantX, cKantY, -100, 30)
    new Kant(cKantX, cKantY, -100, 15)
    new Kant(cKantX, cKantY, -100, -15)
    new Kant(cKantX, cKantY, -100, -35)
    new Kant(cKantX, cKantY, -50, -50)
    new Kant(cKantX, cKantY, -70, -50)
    new Kant(cKantX, cKantY, -100, -30)
    new Kant(cKantX, cKantY, -100, -10)
    new Kant(cKantX, cKantY, -100, -30)
    new Kant(cKantX, cKantY, -100, -50)
    new Kant(cKantX, cKantY, -50, -70)
    new Kant(cKantX, cKantY, 0, -50)
    new Kant(cKantX, cKantY, 50, -80)
    new Kant(cKantX, cKantY, 80, -80)
    new Kant(cKantX, cKantY, 100, -50)
    new Kant(cKantX, cKantY, 100, -20)
    new Kant(cKantX, cKantY, 10, 0)
    new Kant(cKantX, cKantY, 20, -4)
    new Kant(cKantX, cKantY, 300, -4)
    new Kant(cKantX, cKantY, 150, 10)
    new Kant(cKantX, cKantY, 150, 30)
    new Kant(cKantX, cKantY, 150, -30)
    new Kant(cKantX, cKantY, 100, -30)
    new Kant(cKantX, cKantY, 100, -60)
    new Kant(cKantX, cKantY, 80, -100)
    new Kant(cKantX, cKantY, 60, -50)
    new Kant(cKantX, cKantY, 60, -10)
    new Kant(cKantX, cKantY, 60, 10)
    new Kant(cKantX, cKantY, 60, 25)
    new Kant(cKantX, cKantY, 30, 25)
    new Kant(cKantX, cKantY, 20, 55)
    new Kant(cKantX, cKantY, 0, 95)
    new Kant(cKantX, cKantY, -5, 95)
    new Kant(cKantX, cKantY, -15, 95)
    new Kant(cKantX, cKantY, -65, 415)
    new Kant(cKantX, cKantY, -15, 50)
    new Kant(cKantX, cKantY, -15, 30)
    new Kant(cKantX, cKantY, -50, 40)
    new Kant(cKantX, cKantY, -50, 40)
    new Kant(cKantX, cKantY, -50, 20)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -90, 20)
    new Kant(cKantX, cKantY, -90, 20)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -50, 0)
    new Kant(cKantX, cKantY, -35, 0)

    
        //Point
        for (var i = 0; i < (kantList.length) / 2; i++) {
    
            if (kantList[i * 2] == null || kantList[i * 2 + 1] == null) { break }
            new PBalls((((kantList[i].startX + kantList[i].slutX) / 2) + ((kantList[i + kantList.length / 2].startX + kantList[i + kantList.length / 2].slutX) / 2)) / 2, (((kantList[i].startY + kantList[i].slutY) / 2) + ((kantList[i + kantList.length / 2].startY + kantList[i + kantList.length / 2].slutY) / 2)) / 2)
        }
    
    //Slutning
    ending = new End(cKantX,cKantY,cKantX - 100,cKantY + (823-657))

    //BAGVED START KANT
    cKantX = 0
    cKantY = 0
    new Kant(baneStartX-50,baneStartY-50, 50, 150);

    
}
