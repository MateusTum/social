from django.contrib import admin
from .models import Post, PostImage

class PostImageInline(admin.TabularInline):
    model = PostImage
    extra = 1  # Number of extra forms to display
    max_num = 10  # Maximum number of images

class PostAdmin(admin.ModelAdmin):
    inlines = [PostImageInline]
    list_display = ('title', 'author', 'created_at', 'updated_at')
    search_fields = ['title', 'content']

admin.site.register(Post, PostAdmin)