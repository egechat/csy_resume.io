new Vue({
    el: '#app',
    data: function () {
        return {
            resume: {
                base: {
                    name: "陈思颖",
                    sex: "女|丁克主义",
                    birthday: "1995-01",
                    /* address: "上海",*/
                    phone: "+8617683260807 / +33771654105 / Wechat id : miaulement", 
                    mail: "siying.chen@yahoo.com",
                   /*  jobState: "在职", */
                    /* reportState: "月内到岗",
                    experience: "5年经验",
                    position: "全栈工程师",*/
                    /* salary: "丁克" */ 
                }, 
                advantage: {
                    content: "软件：熟练ArcGis Pro, Qgis, 了解ENVI, ERDAS,了解Illustrator, 熟悉Micro Office   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   数据库：Geoserver, PostGres, MySQL"  + `<br>` +
                    "计算机语言：了解VUE3 , javascript, css3 , HTML5。" +"&nbsp;了解java, python, R"+`<br>` +
                    "操作系统：了解Linux &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "语言：熟练使用法语，英语，普通话"
                    
                },
                works: [{
                    company: "ENEDIS 法国国家电网公司",
                    position: "GIS 数据分析师 制图师",
                    duration: "2022.03-2023.03",
                    content: `【项目概述】该项目包含三个下属项目(洪灾，火灾以及大型鸟类保护)，旨在通过GIS技术和地理数据分析，评估自然灾害对朗格多克-鲁西永地区电网设备的潜在影响以及电网设备对该地区大型鸟类的影响，估算对潜在地区的投资预算。该项目旨在帮助公司和该大区的政府部门更好地了解自然灾害风险，采取适当的预防和灾后恢复措施，确保电力供应的可靠性和连续性
                    【项目内容】
                    1. 搜索，收集，整理，清洗，更新，分析公司负责地区的洪灾，火灾，大型鸟类相关数据以及电网设备数据，并撰写报告
                    2. 根据数据，主要使用ArcGisPro 定义灾害等级区域并预测定位可能受影响的电网设备，辅以sql对百万条左右数据进行空间数据分析
                    3. 绘制专题地图以及开发以leaflet为框架库的离线地图以使数据可视化并生成报告，总结分析结果，分析投资预算
                    【项目成果】该项目的主要成果包括详细的自然灾害风险分析报告、GIS地图可视化、电网设备分布数据，该成果有助于公司领导制定未来电网设备发展路线以及制定投资预算
                    `
                    
                },{
                    company: "上莱茵省领土局",
                    position: "GIS 工程师实习生",
                    duration: "2020.03-2020.06",
                    content: `1. 分析道路安全与协调局（BSRC）的需求并分析整理可用数据
                    2. 创建永久性地理数据库（建模化，结构化，倒入，搜索，更新）
                    3. 制作该省道路网2D地图模型 以及相关均速，实速等地图
                    `
                },
                ],
                projects: [
                    {
                        name: "蒙彼利埃市智慧医疗保健机构",
                        position: "  ",
                        duration: "",
                        content: `使用HTML5，CSS3, JavaScript以及leaflet库构建蒙彼利埃市医疗机构定位离线地图网页，用户可以在该网页选择医疗机构目的地并获得导航提示，也可查看用户自定义范围内(米为单位)的医疗机构位置以及数量
                        `
                    
                    },
                    {
                       name: "尼姆市公共交通TANGO线路更新规划方案",
                        
                        duration: "2021.09-2021.12",
                        content: `【项目概述】该项目旨在降低尼姆市公交系统运行的消费成本，并在最大范围内将公共交通服务范围扩大使有需求的市民能够更好的享受到公共服务
                        【项目内容】
                        1.制作城市规划分析表，并分析相关数据以建立并确认“优先指数 (indice de priorité）”以划分优先享受公交服务的街区范围，再制作相关主题地图
                        2.根据相关指数分析尼姆市旧公交线路的合理与不合理处，并优化并制作每条新公交线路的分布
                        3.整合并制作新公共交通线路地图，分析制作新旧线路经济报告表
                        【项目成果】降低了公交服务人口覆盖率，由88.94 %降低为82.26 %，减少富人区（多车家庭）公交服务覆盖率。提高优先服务区域的覆盖率。删除五条公交汽车线路以降低不必要的支出，将原五条线路的必要站点划分到其他公交线路范围。
                        与原支出相比共节约大约130万欧元。
                
                     ` 
                    }, 
                    } 
                ],
                certificates: ["法语DALF C1", "法国计算机应用水平证书level 1"],
                educations: [
                    {
                        school: "法国国立生命与环境科学与工业学院  ranked #4 in QS WUR Ranking By Subject",
                        level: "硕士",
                        professional: "géomatique (地理信息系统)",
                        duration: "2020.09-2023.01",
                        content: `主要相关课程：计算机课程(JAVA, Python, linux), 数据分析(MySQL, R), 数学, 统计学, 地理交通, 遥感, WebGis(HTML,PHP,JavaScritp,GeoServer,Leaflet), 地图学(ArcgisPro, Qgis, Illustrator), 地理空间数据分析(Postgres, postgis, PGAdmin, ArcgisPro)
                         `

                    },
                    {
                        school: "斯特拉斯堡大学",
                        level: "学士",
                        professional: "地理和规划",
                        duration: "2016.09-2020.01",
                        content: `主要相关课程：土地规划和交通，数据分析，数学，统计学，地图学，遥感理论，大气学，生物地理
                        
                        `

                    }
                ]
            },
            loading: {}
        }
    }, created() {
        this.loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    }, mounted() {
        this.loading.close();
    }
})
