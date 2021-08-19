class StaticPagesController < ActionController
  def index
    render file: 'public/index.html'
  end
end