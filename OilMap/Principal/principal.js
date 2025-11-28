(function() {
    'use strict';

    window.applyColorFilter = function(type) {
        document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        if (type) {
            document.body.classList.add(type);
        }
        closeColorMenu();
    };

    window.resetColorFilter = function() {
        document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        closeColorMenu();
    };

    function closeColorMenu() {
        const optionsMenu = document.getElementById('colorblind-options');
        const toggleButton = document.getElementById('colorblind-toggle');
        if (optionsMenu && toggleButton) {
            optionsMenu.style.display = 'none';
            toggleButton.setAttribute('aria-expanded', 'false');
            optionsMenu.setAttribute('aria-hidden', 'true');
        }
    }

    window.scrollToHome = function() {
        const homeElement = document.getElementById('home-page');
        if (homeElement) {
            homeElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.scrollToAbout = function() {
        const aboutElement = document.getElementById('about-page');
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.scrollToMap = function() {
        const mapElement = document.getElementById('map-page');
        if (mapElement) {
            mapElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    window.toggleMenu = function(navId) {
        const nav = document.getElementById(navId);
        const hamburger = document.getElementById('hamburger1');
        if (nav && hamburger) {
            nav.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
    };

    function initColorblindMenu() {
        const toggleButton = document.getElementById('colorblind-toggle');
        const optionsMenu = document.getElementById('colorblind-options');

        if (toggleButton && optionsMenu) {
            toggleButton.addEventListener('click', function(e) {
                e.stopPropagation();
                const isOpen = optionsMenu.style.display === 'block';
                optionsMenu.style.display = isOpen ? 'none' : 'block';
                toggleButton.setAttribute('aria-expanded', !isOpen);
                optionsMenu.setAttribute('aria-hidden', isOpen);
            });

            document.addEventListener('click', function(e) {
                if (!e.target.closest('.accessibility-menu')) {
                    closeColorMenu();
                }
            });
        }
    }

    const locaisData = {
        'bacia de campos': {
            coords: [-22.5, -40.5],
            zoom: 8.5,
            localizacao: 'Margem Leste Brasileira, região Sudeste do Brasil. Estende-se desde o Estado do Espírito Santo (próximo a Vitória) até Arraial do Cabo.',
            area: 'Aproximadamente 100.000 km²',
            sobre: 'A Bacia de Campos é conhecida por ser uma das maiores regiões produtoras de petróleo no Brasil, com campos como Marlim, Marlim Sul e Roncador. Possui diversas plataformas de petróleo em operação, como a FPSO Fluminense, a FPSO Frade, a FPSO Polvo e a FSO Cidade de Macaé.',
            heatPoints: [
                [-22.5, -40.5, 1.0],
                [-22.6, -40.3, 0.9],
                [-22.4, -40.1, 0.95],
                [-22.7, -40.4, 0.85],
                [-22.3, -40.6, 0.8]
            ]
        },
        'bacia de santos': {
            coords: [-25.5, -44.0],
            zoom: 8,
            localizacao: 'Litoral dos estados de São Paulo, Paraná, Santa Catarina e Rio de Janeiro, estendendo-se por mais de 350 km de costa.',
            area: 'Aproximadamente 352.000 km²',
            sobre: 'A Bacia de Santos é mundialmente conhecida pelo pré-sal, abrigando as maiores reservas de petróleo do Brasil. Destacam-se os campos de Tupi/Lula, Búzios, Sapinhoá e Mero, com produção em águas ultra-profundas.',
            heatPoints: [
                [-25.5, -44.0, 1.0],
                [-25.3, -43.8, 0.95],
                [-25.7, -44.2, 0.9],
                [-25.4, -43.5, 0.85],
                [-25.6, -44.5, 0.8]
            ]
        },
        'campo de marlim': {
            coords: [-22.5, -40.5],
            zoom: 10,
            localizacao: 'Bacia de Campos, a cerca de 110 km da costa do Rio de Janeiro, em águas profundas.',
            area: 'Área de produção: aproximadamente 150 km²',
            sobre: 'Descoberto em 1985, o Campo de Marlim é um dos maiores campos de petróleo em águas profundas do Brasil. Opera em lâminas d\'água entre 800 e 1.200 metros, sendo um marco na exploração offshore brasileira.',
            heatPoints: [
                [-22.5, -40.5, 1.0],
                [-22.48, -40.52, 0.9],
                [-22.52, -40.48, 0.85]
            ]
        },
        'campo de albacora': {
            coords: [-22.35, -40.25],
            zoom: 10,
            localizacao: 'Bacia de Campos, próximo ao Campo de Marlim, a aproximadamente 120 km da costa.',
            area: 'Área de produção: aproximadamente 120 km²',
            sobre: 'Campo descoberto em 1984, dividido em Albacora Leste e Albacora. Conhecido por suas reservas significativas em águas profundas, com lâmina d\'água superior a 1.000 metros.',
            heatPoints: [
                [-22.35, -40.25, 1.0],
                [-22.33, -40.27, 0.85],
                [-22.37, -40.23, 0.8]
            ]
        },
        'campo de roncador': {
            coords: [-22.2, -39.9],
            zoom: 10,
            localizacao: 'Bacia de Campos, a nordeste do Campo de Marlim, cerca de 125 km da costa do Rio de Janeiro.',
            area: 'Área de produção: aproximadamente 180 km²',
            sobre: 'Descoberto em 1996, o Campo de Roncador é um dos principais campos produtores da Bacia de Campos. Opera em águas profundas com lâmina d\'água entre 1.500 e 1.900 metros.',
            heatPoints: [
                [-22.2, -39.9, 1.0],
                [-22.18, -39.92, 0.9],
                [-22.22, -39.88, 0.85]
            ]
        },
        'campo de barracuda': {
            coords: [-22.8, -40.1],
            zoom: 10,
            localizacao: 'Bacia de Campos, aproximadamente 80 km da costa do Rio de Janeiro.',
            area: 'Área de produção: aproximadamente 50 km²',
            sobre: 'Descoberto em 1989, o Campo de Barracuda foi pioneiro na produção através de FPSO (Floating Production Storage and Offloading) no Brasil. Opera em águas de aproximadamente 800 metros de profundidade.',
            heatPoints: [
                [-22.8, -40.1, 1.0],
                [-22.78, -40.12, 0.85],
                [-22.82, -40.08, 0.8]
            ]
        },
        'campo de búzios': {
            coords: [-24.7, -42.8],
            zoom: 10,
            localizacao: 'Bacia de Santos, área do pré-sal, aproximadamente 180 km da costa do Rio de Janeiro.',
            area: 'Área estimada: mais de 800 km²',
            sobre: 'Descoberto em 2010, Búzios é um dos maiores campos de petróleo do mundo, com reservas estimadas entre 2 e 3 bilhões de barris. Localizado no pré-sal, em águas ultra-profundas de mais de 2.000 metros.',
            heatPoints: [
                [-24.7, -42.8, 1.0],
                [-24.65, -42.75, 0.95],
                [-24.75, -42.85, 0.9],
                [-24.68, -42.82, 0.85]
            ]
        },
        'campo de tupi/lula': {
            coords: [-24.5, -42.5],
            zoom: 10,
            localizacao: 'Bacia de Santos, área do pré-sal, cerca de 300 km da costa de São Paulo.',
            area: 'Área estimada: aproximadamente 800 km²',
            sobre: 'Descoberto em 2006, o Campo de Lula (anteriormente Tupi) foi o primeiro grande campo do pré-sal brasileiro. Possui reservas estimadas de 8 bilhões de barris, sendo um dos maiores do mundo. Opera em águas de 2.000 a 2.200 metros.',
            heatPoints: [
                [-24.5, -42.5, 1.0],
                [-24.48, -42.52, 0.95],
                [-24.52, -42.48, 0.9],
                [-24.45, -42.55, 0.85]
            ]
        },
        'campo de sapinhoá': {
            coords: [-24.8, -42.3],
            zoom: 10,
            localizacao: 'Bacia de Santos, área do pré-sal, aproximadamente 300 km da costa de São Paulo.',
            area: 'Área de produção: aproximadamente 400 km²',
            sobre: 'Descoberto em 2008, o Campo de Sapinhoá foi o segundo grande campo do pré-sal brasileiro a entrar em produção. Opera em águas ultra-profundas de cerca de 2.200 metros.',
            heatPoints: [
                [-24.8, -42.3, 1.0],
                [-24.78, -42.32, 0.9],
                [-24.82, -42.28, 0.85]
            ]
        },
        'campo de mero': {
            coords: [-24.0, -42.0],
            zoom: 10,
            localizacao: 'Bacia de Santos, área do pré-sal, aproximadamente 160 km da costa do Rio de Janeiro.',
            area: 'Área estimada: mais de 500 km²',
            sobre: 'Descoberto em 2010, o Campo de Mero (também conhecido como Libra) possui reservas estimadas entre 8 e 12 bilhões de barris. É um dos campos mais promissores do pré-sal, em águas de aproximadamente 2.100 metros.',
            heatPoints: [
                [-24.0, -42.0, 1.0],
                [-23.98, -42.02, 0.95],
                [-24.02, -41.98, 0.9]
            ]
        },
        'campo de itapu': {
            coords: [-25.2, -43.5],
            zoom: 10,
            localizacao: 'Bacia de Santos, área do pré-sal, cerca de 220 km da costa de São Paulo.',
            area: 'Área de produção: aproximadamente 300 km²',
            sobre: 'Descoberto em 2008, o Campo de Itapu integra o polo pré-sal da Bacia de Santos. Opera em águas ultra-profundas de mais de 2.000 metros, com produção iniciada em 2018.',
            heatPoints: [
                [-25.2, -43.5, 1.0],
                [-25.18, -43.52, 0.85],
                [-25.22, -43.48, 0.8]
            ]
        },
        'campo de fazenda alegre': {
            coords: [-20.8, -39.8],
            zoom: 10,
            localizacao: 'Bacia do Espírito Santo, próximo à costa capixaba.',
            area: 'Área de produção: aproximadamente 80 km²',
            sobre: 'Campo localizado na Bacia do Espírito Santo, com produção de petróleo e gás natural. Opera em águas relativamente rasas comparadas aos campos do pré-sal.',
            heatPoints: [
                [-20.8, -39.8, 1.0],
                [-20.78, -39.82, 0.85],
                [-20.82, -39.78, 0.8]
            ]
        },
        'campo de são joão': {
            coords: [-22.1, -40.3],
            zoom: 10,
            localizacao: 'Bacia de Campos, próximo à costa do Rio de Janeiro.',
            area: 'Área de produção: aproximadamente 60 km²',
            sobre: 'Campo de petróleo localizado na Bacia de Campos, com produção em águas profundas. Faz parte do conjunto de campos que tornam a região uma das principais produtoras do país.',
            heatPoints: [
                [-22.1, -40.3, 1.0],
                [-22.08, -40.32, 0.85],
                [-22.12, -40.28, 0.8]
            ]
        },
        'terminal cabiúnas': {
            coords: [-22.03, -41.67],
            zoom: 11,
            localizacao: 'Macaé, Rio de Janeiro. Terminal terrestre que recebe a produção offshore da Bacia de Campos.',
            area: 'Área do terminal: aproximadamente 2 km²',
            sobre: 'O Terminal de Cabiúnas (Tecab) é o principal terminal de recebimento, tratamento e escoamento da produção de petróleo e gás da Bacia de Campos. Inaugurado em 1978, é essencial para a logística de petróleo do Brasil.',
            heatPoints: [
                [-22.03, -41.67, 1.0],
                [-22.02, -41.68, 0.7],
                [-22.04, -41.66, 0.7]
            ]
        }
    };

    let map;
    let heatLayer;

    function initMap() {
        const mapElement = document.getElementById('map');
        if (!mapElement) {
            console.log('Elemento do mapa não encontrado ainda');
            return;
        }

        try {
            map = L.map('map').setView([-23.7, -41.7], 9.5);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19
            }).addTo(map);

            trocarMapa('bacia de campos');
        } catch (error) {
            console.error('Erro ao inicializar mapa:', error);
        }
    }

    window.trocarMapa = function(lugar) {
        if (!map) {
            console.error('Mapa não inicializado');
            return;
        }

        const loading = document.getElementById('loadingOverlay');
        if (loading) {
            loading.classList.add('active');
        }

        setTimeout(function() {
            const data = locaisData[lugar];
            
            if (data) {
                const infoLoc = document.getElementById('infoLocalizacao');
                const infoArea = document.getElementById('infoArea');
                const infoSobre = document.getElementById('infoSobre');

                if (infoLoc) infoLoc.textContent = data.localizacao;
                if (infoArea) infoArea.textContent = data.area;
                if (infoSobre) infoSobre.textContent = data.sobre;

                map.setView(data.coords, data.zoom);

                if (heatLayer) {
                    map.removeLayer(heatLayer);
                }

                if (typeof L.heatLayer !== 'undefined') {
                    heatLayer = L.heatLayer(data.heatPoints, {
                        minOpacity: 0.5,
                        maxZoom: 18,
                        radius: 25,
                        blur: 15,
                        gradient: {
                            0.0: 'blue',
                            0.5: 'lime',
                            0.7: 'yellow',
                            0.9: 'orange',
                            1.0: 'red'
                        }
                    }).addTo(map);
                }

                L.marker(data.coords)
                    .addTo(map)
                    .bindPopup('<b>' + lugar.toUpperCase() + '</b><br>' + data.localizacao)
                    .openPopup();
            }

            if (loading) {
                loading.classList.remove('active');
            }
        }, 500);
    };

    function init() {
        initColorblindMenu();
        
        setTimeout(function() {
            if (typeof L !== 'undefined') {
                initMap();
            } else {
                console.error('Leaflet não está carregado');
            }
        }, 100);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();