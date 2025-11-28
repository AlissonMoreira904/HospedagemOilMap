import folium
from folium import plugins
import branca.colormap as cm

m = folium.Map(
    location=[-22.5000, -41.5000],
    zoom_start=12,
    tiles='OpenStreetMap'
)

heat_data = [
    [-22.5000, -41.5000],  
    [-22.5000, -41.5000], 
]

heat_layer = plugins.HeatMap(
    heat_data,
    min_opacity=0.5,
    max_zoom=18,
    radius=25,
    blur=15
)
heat_layer.add_to(m)

folium.LayerControl().add_to(m)

folium.plugins.Fullscreen().add_to(m)

m.save('/Principal/mapa_amazonia.html') 