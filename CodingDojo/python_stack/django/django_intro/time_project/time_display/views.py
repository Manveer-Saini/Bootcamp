from django.shortcuts import render
from time import gmtime, strftime
    
def index(request):
    context = {
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime()),
        "timeHeader": "The current time and date:"
    }
    return render(request,'time.html', context)

