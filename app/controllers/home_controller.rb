class HomeController < ApplicationController
  def index
    render :index, locals: { product_detail_presenter: ProductDetailPresenter.new }
  end
end
